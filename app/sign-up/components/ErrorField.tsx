import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorFieldProps {
    error?: string;
}

export const ErrorField: React.FC<ErrorFieldProps> = ({ error }) => {
    if (!error) return null;

    return (
        <div className="flex items-center gap-1.5 mt-1.5 text-pink-500 animate-fade-in">
            <AlertCircle size={14} className="shrink-0" />
            <p className="text-xs font-medium leading-tight">{error}</p>
        </div>
    );
};
