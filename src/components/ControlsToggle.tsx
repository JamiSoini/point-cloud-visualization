import { useState } from "react";
import type { SceneController } from "../three-utils/SceneController";

//toggle between orbit and trackball controls
export function ControlsToggle({
    sceneRef
}: {
    sceneRef: React.RefObject<SceneController | null>;
}) {
    const [mode, setMode] = useState<"orbit" | "trackball">("orbit");

    const toggle = () => {
        const next = mode === "orbit" ? "trackball" : "orbit";
        setMode(next);
        sceneRef.current?.setControls(next);
    };

    return (
        <button onClick={toggle}>
            Controls: {mode}
        </button>
    );
}
