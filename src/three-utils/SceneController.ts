import * as THREE from "three";

export type BackgroundMode = "dark" | "light" | "skybox";
export type ControlMode = "orbit" | "trackball";

//interface between React components and Three.js scenes
export interface SceneController {
    setGeometry: (geometry: THREE.BufferGeometry) => void;
    setPointSize: (size: number) => void;
    setDepthWrite: (enabled: boolean) => void;
    setBackground: (mode: BackgroundMode) => void;
    setControls: (mode: ControlMode) => void;
    dispose: () => void;
};