import type { SceneController } from "../three-utils/SceneController";

//select element to change point size for different kinds of point clouds
type Props = {
    sceneRef: React.RefObject<SceneController | null>;
}

export function PointSizeControls({ sceneRef }: Props) {
    return (
        <select
            defaultValue="0.1"
            onChange={(e) =>
                sceneRef.current?.setPointSize?.(Number(e.target.value))
            }
        >
            <option value="3">Large</option>
            <option value="0.1">Medium</option>
            <option value="0.03">Small</option>
        </select>
    );
}
