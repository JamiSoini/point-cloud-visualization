import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export async function initScene(
    container: HTMLDivElement
):  Promise<{ cleanup: () => void}> {

    //create scene, camera, renderer and controls
    const scene = new THREE.Scene();

    //in PerspectiveCamera faraway objects look smaller 
    //fov, aspect ratio, clipping near: 0.1-1.0, clipping far: 1 000-10 000
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
    camera.position.z = 90; //10-1000 small to big point clouds (will do automatic position later)

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(1920, 1080);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    //create material for points
    const material = new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        vertexColors: true,
        alphaTest: 0.5
    });

    //load geometry for the point cloud data for points
    const loader = new PLYLoader();
    const url = import.meta.env.BASE_URL + "pointclouds/stairs.ply";
    const geometry = await loader.loadAsync(url);
    geometry.computeBoundingBox();
    geometry.center();

    //create points, add to scene
    let points = new THREE.Points(geometry, material)
    scene.add(points);

    //animation loop
    let running = true;
    function animate() {
        if (!running) return;
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    //cleanup function required
    function dispose() {
        running = false;
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        controls.dispose();
        container.removeChild(renderer.domElement);
    }
    return { cleanup: dispose };
}
