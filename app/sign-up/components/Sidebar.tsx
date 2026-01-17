import React from "react";
import { Check } from "lucide-react";

interface SidebarProps {
    currentStep: number;
    onStepClick: (step: number) => void;
    navigationEnabled?: boolean;
}

const steps = [
    { id: 1, label: "Merchant Signup" },
    { id: 2, label: "Contact Information" },
    { id: 3, label: "Business Information" },
    { id: 4, label: "Menu Information" },
    { id: 5, label: "Bank Details" },
    { id: 6, label: "Summary" },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentStep, onStepClick, navigationEnabled = false }) => {
    return (
        <div className="w-full md:w-64 bg-white/10 border-r border-white/20 p-6 flex flex-col hidden md:flex min-h-screen">
            <div className="mb-4">
                <h2 className="font-bold text-lg mb-6">Merchant Onboarding</h2>
                <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 py-2">
                    {steps.map((step) => {
                        const isActive = currentStep === step.id;
                        const isCompleted = currentStep > step.id;

                        return (
                            <div
                                key={step.id}
                                className={`relative flex items-center pl-6 transition-colors duration-300 ${navigationEnabled ? "cursor-pointer group" : "cursor-default opacity-80"}`}
                                onClick={() => navigationEnabled && onStepClick(step.id)}
                            >
                                {/* Dot / Indicator */}
                                <div
                                    className={`absolute -left-[9px] w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-300
                  ${isActive
                                            ? "bg-yellow-400 border-yellow-400"
                                            : isCompleted
                                                ? "bg-white border-green-500"
                                                : navigationEnabled ? "bg-white border-slate-300 group-hover:border-sky-400" : "bg-white border-slate-300"
                                        }`}
                                >
                                    {isCompleted && <div className="w-2 h-2 bg-green-500 rounded-full" />}
                                </div>

                                {/* Number or Check */}
                                <div className={`
                    absolute -left-[28px] hidden md:hidden 
                 `}>
                                    {/* Can expose number if desired but the design uses a simple line+dot vertical stepper */}
                                </div>

                                {/* Label */}
                                <div className="flex flex-col">
                                    <span
                                        className={`text-sm font-medium transition-colors
                        ${isActive ? "text-black" : isCompleted ? "text-slate-600" : navigationEnabled ? "text-slate-400 group-hover:text-sky-500" : "text-slate-400"}
                        `}
                                    >
                                        <span className={`inline-block w-5 text-center mr-2 text-xs border rounded-full leading-4 h-5 ${isActive ? "border-yellow-400 bg-yellow-400 text-black" : "border-slate-300 bg-white"}`}>
                                            {isCompleted ? (
                                                <span className="text-green-500">✓</span>
                                            ) : (
                                                step.id
                                            )}
                                        </span>
                                        {step.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
