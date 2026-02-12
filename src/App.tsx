import { useRef } from "react";
import { ThreeScene } from "./components/ThreeScene";
import type { SceneController } from "./three-utils/SceneController";
import { loadPLYFromBuffer } from "./three-utils/loadPointCloud";
import { ImportPointCloudButton } from "./components/ImportButton";

export default function App() {
  const sceneRef = useRef<SceneController>(null);
  const handleFileLoaded = (buffer: ArrayBuffer) => {
    const geometry = loadPLYFromBuffer(buffer);
    sceneRef.current?.setGeometry(geometry);
    console.log("sceneRef.current:", sceneRef.current);
  };

  return (
    <div>
      <ImportPointCloudButton onFileLoaded={handleFileLoaded} />
      <ThreeScene ref={sceneRef} />
    </div>
  );
}
