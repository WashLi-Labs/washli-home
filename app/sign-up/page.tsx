"use client";
import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";

import { Step1MerchantSignup } from "./components/Step1MerchantSignup";
import { Step2ContactInfo } from "./components/Step2ContactInfo";
import { Step3BusinessInfo } from "./components/Step3BusinessInfo";
import { Step4MenuInfo } from "./components/Step4MenuInfo";
import { Step5BankDetails } from "./components/Step5BankDetails";
import { Step6Summary } from "./components/Step6Summary";

import { SignUpFormData, initialFormData } from "./types";
import PageLayout from "@/components/page-layout";
import Header from "@/components/header";

export default function SignUpPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

    const updateFormData = (updates: Partial<SignUpFormData>) => {
        setFormData((prev) => ({ ...prev, ...updates }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <PageLayout showHeader={false} showFooter={false}>
            {/* Centered Top Header for focused flow */}
            <Header centered />

            <div className="relative z-10 flex flex-1 max-w-7xl w-full mx-auto md:px-8 py-4 h-full items-start">
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
                                    onSubmit={() => {
                                        console.log("Form Data Submitted:", formData);
                                        alert("Registration Submitted Successfully!");
                                    }}
                                    data={formData}
                                    onGoToStep={setCurrentStep}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
