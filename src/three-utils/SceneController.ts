import * as THREE from "three";

//interface between React components and Three.js scenes
export interface SceneController {
    setGeometry: (geometry: THREE.BufferGeometry) => void;
    setPointSize: (size: number) => void;
    setDepthWrite: (enabled: boolean) => void;
    dispose: () => void;
};