import React, { useRef, ChangeEvent } from "react";
import { Upload } from "lucide-react";

interface FileUploadInputProps {
    value?: string;
    onFileSelect: (fileName: string) => void;
    placeholder?: string;
}

export const FileUploadInput: React.FC<FileUploadInputProps> = ({ value, onFileSelect, placeholder = "No file chosen" }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onFileSelect(file.name);
        }
    };

    return (
        <div className="flex rounded-lg overflow-hidden border border-slate-200 w-full">
            <input
                type="text"
                placeholder={placeholder}
                value={value || ""}
                readOnly
                className="flex-1 px-4 py-3 bg-white text-sm text-slate-500 focus:outline-none"
            />
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
            />
            <button
                type="button"
                onClick={handleButtonClick}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 font-medium text-white text-sm flex items-center transition-colors whitespace-nowrap"
            >
                <Upload size={16} className="mr-2" />
                Upload
            </button>
        </div>
    );
};
