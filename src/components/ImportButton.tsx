import { useRef } from "react";

//button to load .ply point cloud from users disk with file picker
export function ImportPointCloudButton({
    onFileLoaded
}: {
    onFileLoaded: (buffer: ArrayBuffer) => void;
}) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            if (result instanceof ArrayBuffer) {
                onFileLoaded(result);
            } else {
                console.error("Unexpcted file result type", result);
            }
            if (inputRef.current) inputRef.current.value ="";
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <button onClick={() => inputRef.current?.click()}>
                Load PointCloud.ply
            </button>
            <input
                ref={inputRef}
                type="file"
                accept=".ply"
                hidden
                onChange={handleFileChange}
            />
        </div>
    );
}
