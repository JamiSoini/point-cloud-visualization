import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { initScene } from "../three-utils/customShaderScene";
import type { SceneController } from "../three-utils/SceneController";

export const CustomShaderScene = forwardRef<SceneController>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [controller, setController] = useState<SceneController | null>(null);

  // A safe fallback so the ref always has the correct shape
  const fallbackController: SceneController = {
    setGeometry: () => console.warn("Scene not ready"),
    setPointSize: () => {},
    setDepthWrite: () => {},
    setBackground: () => {},
    setControls: () => {},
    dispose: () => {} 
  };

  useImperativeHandle(ref, () => controller ?? fallbackController, [controller]);

  useEffect(() => {
    if (!containerRef.current) return;

    let cleanupFn: (() => void) | undefined;

    initScene(containerRef.current).then(({ controller, cleanup }) => {
      console.log("initScene finished, controller ready");
      setController(controller);
      cleanupFn = cleanup;
    });

    return () => cleanupFn?.();
  }, []);

  return <div ref={containerRef} />;
});
