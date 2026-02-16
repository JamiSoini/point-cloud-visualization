import type { SceneController } from "../three-utils/SceneController";

//dropdown to choose background option

type Props = {
    sceneRef: React.RefObject<SceneController | null>;
};

export function BackgroundControls({ sceneRef }: Props) {
    return (
        <select
            defaultValue="dark"
            onChange={(e) =>
                sceneRef.current?.setBackground(
                    e.target.value as "dark" | "light" | "skybox"
                )
            }
            >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="skybox">Skybox</option>
            </select>
    );
}