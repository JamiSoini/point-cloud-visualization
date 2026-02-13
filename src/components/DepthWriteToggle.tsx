import { useState } from "react";
import type { SceneController } from "../three-utils/SceneController";

//DepthWrite toggle for different visuals, "transparent/opaque" points
type Props = {
    sceneRef: React.RefObject<SceneController | null>;
};

export function DepthWriteToggle({ sceneRef }: Props) {
    const [enabled, setEnabled] = useState(false);

    const toggle = () => {
        const next = !enabled;
        setEnabled(next);
        sceneRef.current?.setDepthWrite(next);
    };

    return (
        <button onClick={toggle}>
            Transparency: {enabled ? "OFF" : "ON"}
        </button>
    );
}