import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { initScene } from "../three-utils/threePointCloudScene";
import type { SceneController } from "../three-utils/SceneController";

//mount three.js scene into a div element, initialize it and store cleanup
export const ThreeScene = forwardRef<SceneController>((_, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [controller, setController] = useState<SceneController | null>(null);

    //fallback so the ref always correct shape
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

        let cleanup: (() => void) | undefined;

        initScene(containerRef.current).then(({ controller, cleanup: fn }) => {
            console.log("initScene finished, controller ready");
            setController(controller);
            cleanup = fn;
        });
        
        return () => cleanup?.();
    }, []);

    return (
        <div ref={containerRef} />
    );
});
