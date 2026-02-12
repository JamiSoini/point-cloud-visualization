import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import type { SceneController } from "./SceneController";

//Three.js rendering environment
export async function initScene(
    container: HTMLDivElement
):  Promise<{ controller: SceneController ; cleanup: () => void}> {

    //create scene, camera, renderer and controls
    const scene = new THREE.Scene();

    //in PerspectiveCamera faraway objects look smaller 
    //fov, aspect ratio, clipping near: 0.1-1.0, clipping far: 1 000-10 000
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
    camera.position.z = 90; //10-1000 small to big point clouds (will do automatic position later)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(800, 600);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    //create material for points
    const material = new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        vertexColors: true,
        alphaTest: 0.5
    });

    //create replacable points to render with PLY geometry and material
    let points: THREE.Points | null = null;
    function setGeometry(geometry: THREE.BufferGeometry) {
        console.log("setGeomety called!");
        //replace old geometry
        if (points) {
            scene.remove(points);
            points.geometry.dispose();
        }
        points = new THREE.Points(geometry, material);
        scene.add(points);
        //automatic camera placement on load
        const sphere = geometry.boundingSphere;
        if (sphere) {
            const distance = sphere.radius * 1.7;
            camera.position.set( sphere.center.x, sphere.center.y, sphere.center.z + distance );
            controls.target.copy(sphere.center);
            controls.update();
        }
        console.log("setGeometry called, positions:", geometry.getAttribute("position").count);
        console.log("vertexColors", geometry.getAttribute("color"));
    }

    //animation loop
    let running = true;
    function animate() {
        if (!running) return;
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    //cleanup function removes DOM elements freeing GPU resources when React unmounts
    function dispose() {
        running = false;
        if (points) points.geometry.dispose();
        material.dispose();
        renderer.dispose();
        controls.dispose();
        container.removeChild(renderer.domElement);
    }

    const controller: SceneController = {setGeometry, dispose};

    return { controller, cleanup: dispose };
}
