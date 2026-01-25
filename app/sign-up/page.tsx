"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sidebar } from "./components/Sidebar";

import { Step1MerchantSignup } from "./components/Step1MerchantSignup";
import { Step2ContactInfo } from "./components/Step2ContactInfo";
import { Step3BusinessInfo } from "./components/Step3BusinessInfo";
import { Step4MenuInfo } from "./components/Step4MenuInfo";
import { Step5BankDetails } from "./components/Step5BankDetails";
import { Step6Summary } from "./components/Step6Summary";

import { SignUpFormData, initialFormData } from "./types";

// Placeholder components for steps

const StepPlaceholder = ({ step, onNext, onPrev }: { step: number; onNext: () => void; onPrev: () => void }) => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold">Step {step}</h2>
        <p>Placeholder content for step {step}.</p>
        <div className="flex gap-4 mt-4">
            <button onClick={onPrev} className="px-4 py-2 bg-gray-200 rounded-lg">Prev</button>
            <button onClick={onNext} className="px-4 py-2 bg-yellow-400 rounded-lg">Next</button>
        </div>
    </div>
);

export default function SignUpPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

    const updateFormData = (updates: Partial<SignUpFormData>) => {
        setFormData((prev) => ({ ...prev, ...updates }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col font-sans">
            {/* Background image + blur layer (Matching Partners/Contact Page) */}
            <div
                className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
                aria-hidden
            />
            {/* Light overlay to soften */}
            <div className="absolute inset-0 bg-white/30" aria-hidden />

            {/* Top Header */}
            <header className="relative z-50 py-6 px-8 flex items-center justify-center sticky top-0">
                <Link href="/" className="text-3xl font-bold text-black text-center">
                    Wash<span className="text-sky-500">L</span>i
                </Link>
            </header>

            <div className="relative z-10 flex flex-1 max-w-7xl w-full mx-auto md:px-8 py-8 h-full items-start">
                <div className="bg-white/50 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-3xl flex flex-col md:flex-row w-full overflow-hidden min-h-[600px]">
                    {/* Sidebar */}
                    <Sidebar currentStep={currentStep} onStepClick={setCurrentStep} navigationEnabled={currentStep >= 6} />

                    {/* Main Content */}
                    <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                        <div className="max-w-3xl mx-auto">
                            {/* Render Step Content Based on currentStep */}
                            {currentStep === 1 && (
                                <Step1MerchantSignup 
                                    onNext={nextStep} 
                                    data={formData} 
                                    updateData={updateFormData} 
                                />
                            )}
                            {currentStep === 2 && (
                                <Step2ContactInfo 
                                    onNext={nextStep} 
                                    onPrev={prevStep} 
                                    data={formData} 
                                    updateData={updateFormData} 
                                />
                            )}
                            {currentStep === 3 && (
                                <Step3BusinessInfo 
                                    onNext={nextStep} 
                                    onPrev={prevStep} 
                                    data={formData} 
                                    updateData={updateFormData} 
                                />
                            )}
                            {currentStep === 4 && (
                                <Step4MenuInfo 
                                    onNext={nextStep} 
                                    onPrev={prevStep} 
                                    data={formData} 
                                    updateData={updateFormData} 
                                />
                            )}
                            {currentStep === 5 && (
                                <Step5BankDetails 
                                    onNext={nextStep} 
                                    onPrev={prevStep} 
                                    data={formData} 
                                    updateData={updateFormData} 
                                />
                            )}
                            {currentStep === 6 && (
                                <Step6Summary 
                                    onPrev={prevStep} 
                                    onSubmit={() => alert("Registration Submitted Successfully! \n\n" + JSON.stringify(formData, null, 2))} 
                                    data={formData}
                                    onGoToStep={setCurrentStep}
                                />
                            )}
                            {currentStep > 6 && <StepPlaceholder step={currentStep} onNext={nextStep} onPrev={prevStep} />}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="relative z-10 py-6 text-center text-slate-600 text-sm">
                © 2026 - WashLi. All rights reserved.
            </footer>
        </div>
    );
}
