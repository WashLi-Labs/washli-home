import React, { useRef, ChangeEvent } from "react";
import { Upload } from "lucide-react";

interface FileUploadInputProps {
    value?: string | string[];
    onFileSelect: (base64: string | string[], fileName: string | string[]) => void;
    placeholder?: string;
    fileName?: string | string[];
    multiple?: boolean;
}

export const FileUploadInput: React.FC<FileUploadInputProps> = ({ value, onFileSelect, placeholder = "No file chosen", fileName, multiple = false }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        if (multiple) {
            const base64Promises = Array.from(files).map(file => {
                return new Promise<{ base64: string; name: string }>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        resolve({ base64: reader.result as string, name: file.name });
                    };
                    reader.readAsDataURL(file);
                });
            });

            const results = await Promise.all(base64Promises);
            const base64s = results.map(r => r.base64);
            const names = results.map(r => r.name);
            onFileSelect(base64s, names);
        } else {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                onFileSelect(reader.result as string, file.name);
            };
            reader.readAsDataURL(file);
        }
    };

    const getDisplayValue = () => {
        if (Array.isArray(fileName)) {
            return fileName.length > 0 ? `${fileName.length} files selected` : placeholder;
        }
        if (fileName) return fileName;
        if (typeof value === 'string') {
            return value.startsWith("data:") ? "File Selected" : value;
        }
        if (Array.isArray(value)) {
            return value.length > 0 ? `${value.length} files selected` : placeholder;
        }
        return placeholder;
    };

    return (
        <div className="flex rounded-lg overflow-hidden border border-slate-200 w-full text-slate-400">
            <input
                type="text"
                placeholder={placeholder}
                value={getDisplayValue()}
                readOnly
                className="flex-1 min-w-0 px-4 py-3 bg-white text-sm text-slate-500 focus:outline-none"
            />
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple={multiple}
                className="hidden"
            />
            <button
                type="button"
                onClick={handleButtonClick}
                className="px-4 py-3 bg-sky-500 hover:bg-sky-600 font-medium text-white text-sm flex items-center transition-colors whitespace-nowrap flex-shrink-0"
            >
                <Upload size={16} className="mr-2" />
                Upload
            </button>
        </div>
    );
};
