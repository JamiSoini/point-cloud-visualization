import { useRef } from "react";
import { ThreeScene } from "./components/ThreeScene";
import { CustomShaderScene } from "./components/CustomShaderScene";
import type { SceneController } from "./three-utils/SceneController";
import { loadPLYFromBuffer } from "./three-utils/loadPointCloud";
import { ImportPointCloudButton } from "./components/ImportButton";
import { PointSizeControls } from "./components/PointSizeControls";
import { DepthWriteToggle } from "./components/DepthWriteToggle";
import { BackgroundControls } from "./components/BackgroundControls";
import { ControlsToggle } from "./components/ControlsToggle";
import "./App.css";

export default function App() {
  const sceneRefA = useRef<SceneController>(null);
  const sceneRefB = useRef<SceneController>(null);
  const handleFileLoadedA = (buffer: ArrayBuffer) => {
    const geometry = loadPLYFromBuffer(buffer);
    sceneRefA.current?.setGeometry(geometry);
    console.log("sceneRef.current:", sceneRefA.current);
  };
  const handleFileLoadedB = (buffer: ArrayBuffer) => {
    const geometry = loadPLYFromBuffer(buffer);
     sceneRefB.current?.setGeometry(geometry);
     console.log("sceneRef.current:", sceneRefB.current);
  };

  return (
    <div className="app">
      <div className="tools">
        <div className="tools-content">
          <div className="tools-label">1st Point Cloud</div>
          <ImportPointCloudButton onFileLoaded={handleFileLoadedA} />
          <DepthWriteToggle sceneRef={sceneRefA} />
          <ControlsToggle sceneRef={sceneRefA} />
          <div className="tools-label">Set Point Size</div>
          <PointSizeControls sceneRef={sceneRefA} />
          <div className="tools-label">Choose background</div>
          <BackgroundControls sceneRef={sceneRefA} />
        </div>
        <div className="tools-content">
          <div className="tools-label">2nd Point Cloud</div>
          <ImportPointCloudButton onFileLoaded={handleFileLoadedB} />
          <DepthWriteToggle sceneRef={sceneRefB} />
          <ControlsToggle sceneRef={sceneRefA} />
          <div className="tools-label">Choose background</div>
          <BackgroundControls sceneRef={sceneRefB} />
        </div>
      </div>
        <div className="scene-container">
          <ThreeScene ref={sceneRefA} />
        </div>
        <div className="scene-container">
          <CustomShaderScene ref={sceneRefB} />
        </div>
    </div>
  );
}
