"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "./components/Sidebar";

import { Step1MerchantSignup } from "./components/Step1MerchantSignup";
import { Step2ContactInfo } from "./components/Step2ContactInfo";
import { Step3BusinessInfo } from "./components/Step3BusinessInfo";
import { Step4MenuInfo } from "./components/Step4MenuInfo";
import { Step5BankDetails } from "./components/Step5BankDetails";
import { Step6Summary } from "./components/Step6Summary";

import { SignUpFormData, initialFormData, FormErrors, ApiError } from "./types";
import PageLayout from "@/components/page-layout";
import Header from "@/components/header";
import { API_BASE_URL, MERCHANT_REGISTER_ENDPOINT } from "@/lib/config";

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
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<SignUpFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});

    const updateFormData = (updates: Partial<SignUpFormData>) => {
        setFormData((prev) => ({ ...prev, ...updates }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async () => {
        setIsSubmitting(true);
        setErrors({}); // Clear existing errors
        try {
            const { ...payload } = formData;
            const response = await fetch(`${API_BASE_URL}${MERCHANT_REGISTER_ENDPOINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const responseData = await response.json().catch(() => ({}));

            if (!response.ok) {
                if (response.status === 422 && responseData.detail) {
                    const newErrors: FormErrors = {};
                    (responseData.detail as ApiError[]).forEach((err) => {
                        const fieldName = err.loc[err.loc.length - 1] as string;
                        newErrors[fieldName] = err.msg;
                    });
                    setErrors(newErrors);

                    // Logic to jump to the first step with an error
                    const stepMapping: { [key: string]: number } = {
                        email: 1, howDidYouHear: 1, merchantType: 1, outletName: 1, outletAddress: 1, city: 1, phoneNumber: 1, location: 1,
                        ownerName: 2, ownerPhone: 2, ownerEmail: 2, managerName: 2, managerPhone: 2, managerEmail: 2, operatingHours: 2,
                        businessRegistered: 3, parentName: 3, brNumber: 3, brPhoneNumber: 3, brDocument: 3, taxRegistered: 3, tinNumber: 3, taxCertificate: 3, tdlDocument: 3, vatRegistered: 3, vatNumber: 3, nicFront: 3, nicBack: 3,
                        menuDocument: 4, outletLogo: 4, hasImages: 4, itemImages: 4,
                        beneficiaryName: 5, accountHolderPhone: 5, accountNumber: 5, bankName: 5, branchName: 5, branchCode: 5, bankStatement: 5
                    };

                    const firstErrorField = Object.keys(newErrors)[0];
                    if (firstErrorField && stepMapping[firstErrorField]) {
                        setCurrentStep(stepMapping[firstErrorField]);
                    }

                    throw new Error("Validation failed. Please check the highlighted fields.");
                }
                throw new Error(responseData.message || "Registration failed");
            }

            console.log("Registration Success:", responseData);
            alert("Registration Submitted Successfully! Welcome aboard.");
            router.push("/sign-up"); // Navigate to root partner page
        } catch (error: any) {
            console.error("Registration Error:", error);
            // alert(`Error: ${error.message || "Something went wrong"}`);
            // Use local state for errors instead of alert for better UI
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout showHeader={false} showFooter={false} allowScroll={true}>
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
                                    errors={errors}
                                />
                            )}
                            {currentStep === 2 && (
                                <Step2ContactInfo
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                    data={formData}
                                    updateData={updateFormData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 3 && (
                                <Step3BusinessInfo
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                    data={formData}
                                    updateData={updateFormData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 4 && (
                                <Step4MenuInfo
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                    data={formData}
                                    updateData={updateFormData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 5 && (
                                <Step5BankDetails
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                    data={formData}
                                    updateData={updateFormData}
                                    errors={errors}
                                />
                            )}
                            {currentStep === 6 && (
                                <Step6Summary
                                    onPrev={prevStep}
                                    onSubmit={handleFormSubmit}
                                    data={formData}
                                    onGoToStep={setCurrentStep}
                                    errors={errors}
                                    isSubmitting={isSubmitting}
                                />
                            )}

                        </div >
                    </div >
                </div >
            </div >
        </PageLayout >
    );
}
