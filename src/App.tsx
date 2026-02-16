import { useRef } from "react";
import { ThreeScene } from "./components/ThreeScene";
import type { SceneController } from "./three-utils/SceneController";
import { loadPLYFromBuffer } from "./three-utils/loadPointCloud";
import { ImportPointCloudButton } from "./components/ImportButton";
import { PointSizeControls } from "./components/PointSizeControls";
import { DepthWriteToggle } from "./components/DepthWriteToggle";
import { BackgroundControls } from "./components/BackgroundControls";
import { ControlsToggle } from "./components/ControlsToggle";
import "./App.css";

export default function App() {
  const sceneRef = useRef<SceneController>(null);
  const handleFileLoaded = (buffer: ArrayBuffer) => {
    const geometry = loadPLYFromBuffer(buffer);
    sceneRef.current?.setGeometry(geometry);
    console.log("sceneRef.current:", sceneRef.current);
  }

  return (
    <div className="app">
      <div className="tools">
        <div className="tools-content">
          <ImportPointCloudButton onFileLoaded={handleFileLoaded} />
          <DepthWriteToggle sceneRef={sceneRef} />
          <ControlsToggle sceneRef={sceneRef} />
          <div className="tools-label">Set Point Size</div>
          <PointSizeControls sceneRef={sceneRef} />
          <div className="tools-label">Choose background</div>
          <BackgroundControls sceneRef={sceneRef} />
        </div>
      </div>
      <div className="content">
        <div className="scene-container">
          <ThreeScene ref={sceneRef} />
        </div>
      </div>
    </div>
  );
}
