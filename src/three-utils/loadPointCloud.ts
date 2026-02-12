import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/Addons.js";

//load geometry from point cloud in PLY format and normalize attributes
//returns geometry for Three.points object in initScene
export function loadPLYFromBuffer(buffer: ArrayBuffer): THREE.BufferGeometry {
    const loader = new PLYLoader();
    const geometry = loader.parse(buffer);
    geometry.computeBoundingBox();
    geometry.center();
    geometry.rotateX(-Math.PI / 2);
    geometry.computeBoundingSphere();

    return geometry;
}
