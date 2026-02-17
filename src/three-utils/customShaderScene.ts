import * as THREE from "three";
import { OrbitControls, TrackballControls } from "three/examples/jsm/Addons.js";
import type { SceneController, ControlMode } from "./SceneController";

import vertexShader from "../shaders/vertex.glsl?raw";
import fragmentShader from "../shaders/fragment.glsl?raw";

//Three.js rendering environment
export async function initScene(
    container: HTMLDivElement
):  Promise<{ controller: SceneController ; cleanup: () => void}> {

    //create scene, camera, renderer and controls
    const scene = new THREE.Scene();

    //create background options
    const LIGHT_BG = 0xEAEAEA;
    const DARK_BG = 0x000020;
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const base = import.meta.env.BASE_URL;
    const skyboxTexture = cubeTextureLoader.load([
        `${base}skybox/px.png`,`${base}skybox/nx.png`,`${base}skybox/py.png`,`${base}skybox/ny.png`,`${base}skybox/pz.png`,`${base}skybox/nz.png`
    ]);
    scene.background = new THREE.Color( DARK_BG );

    //add axes helper to the scene, so directions and center of the scene is easy to see
    const axesHelper = new THREE.AxesHelper(4);
    scene.add(axesHelper);

    //in PerspectiveCamera faraway objects look smaller 
    //fov, aspect ratio, clipping near: 0.1-1.0, clipping far: 1 000-10 000
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
    camera.position.z = 90; //10-1000 small to big point clouds (will do automatic position later)

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    function resize() {
        const { clientWidth, clientHeight } = container;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight, false);
    }
    resize();
    window.addEventListener("resize", resize);

    //toggleable controls
    let controls: OrbitControls | TrackballControls;
    let controlMode: ControlMode = "orbit";

    function createControls(mode: ControlMode) {
        controls?.dispose();
        if (mode === "orbit") {
            const orbit = new OrbitControls(camera, renderer.domElement);
            orbit.enableDamping = true;
            orbit.dampingFactor = 0.05;
            orbit.target.set(0, 0, 0);
            orbit.update();
            controls = orbit;
        } else {
            const trackball = new TrackballControls(camera, renderer.domElement);
            trackball.rotateSpeed = 3.0;
            trackball.zoomSpeed = 1.2;
            trackball.panSpeed = 0.8;
            controls = trackball;
        }
        controlMode = mode;
    }
    createControls("orbit");

    //create material for points using custom shader for better visuals and colors
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        vertexColors: true,
        depthWrite: false
    });

    function setDepthWrite(enabled: boolean) {
        material.depthWrite = enabled;
        material.needsUpdate = true;
    }

    //function for user to choose a background
    function setBackground(mode: "light" | "dark" | "skybox") {
        switch (mode) {
        case "light":
            scene.background = new THREE.Color(LIGHT_BG);
            break;
        case "dark":
            scene.background = new THREE.Color(DARK_BG);
            break;
        case "skybox":
            scene.background = skyboxTexture;
            break;
        }
    }

    //toggle between contorl modes
    function setControls(mode: ControlMode) {
        if (mode === controlMode) return;
        createControls(mode);
    }

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
        axesHelper.dispose();
        skyboxTexture.dispose();
        container.removeChild(renderer.domElement);
        window.removeEventListener("resize", resize);
    }

    const controller: SceneController = {setGeometry, setDepthWrite, setBackground, setControls, dispose};

    return { controller, cleanup: dispose };
}
