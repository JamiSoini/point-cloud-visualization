import { useEffect, useRef } from "react";
import { initScene } from "../three-utils/threePointCloudRenderer";

//mount three.js scene into a div element, initialize it and store cleanup
export default function ThreeScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let cleanup: (() => void) | undefined;

        initScene(containerRef.current).then(({ cleanup: fn }) => {
            cleanup = fn;
        });
        
        return () => cleanup?.();
    }, []);

    return (
        <div ref={containerRef} />
    );
}
