import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SignUpFormData } from "../types";
import { FileUploadInput } from "./FileUploadInput";

interface Step3Props {
    onNext: () => void;
    onPrev: () => void;
    data: SignUpFormData;
    updateData: (updates: Partial<SignUpFormData>) => void;
}

export const Step3BusinessInfo: React.FC<Step3Props> = ({ onNext, onPrev, data, updateData }) => {
    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Business Information</h2>
            </div>

            <div className="space-y-6">
                {/* Disclaimer */}
                <div className="bg-slate-50 p-3 sm:p-4 rounded-lg border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Disclaimer:</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed text-justify">
                        Please be advised that any delay in the onboarding process may occur if incorrect documentation is provided.
                        It is imperative to ensure that all documentation submitted is accurate and complete to avoid any potential delays.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 text-justify">
                        We recommend watching the registration <span className="text-sky-500 font-medium cursor-pointer">tutorial video</span> if you require additional support.
                    </p>
                </div>

                <form className="space-y-8">
                    {/* Business Registration */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-slate-800 text-base sm:text-lg">Business Registration</h3>
                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm text-slate-700">Business Registered</p>
                            <div className="flex bg-slate-100 rounded-full p-1 inline-flex">
                                <button
                                    type="button"
                                    onClick={() => updateData({ businessRegistered: true })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${data.businessRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateData({ businessRegistered: false })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${!data.businessRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                    {data.businessRegistered && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 animate-fade-in-up">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Parent name as per BR*</label>
                                <input
                                    type="text"
                                    value={data.parentName}
                                    onChange={(e) => updateData({ parentName: e.target.value })}
                                    placeholder="Parent name as per BR"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">BR Number*</label>
                                <input
                                    type="text"
                                    value={data.brNumber}
                                    onChange={(e) => updateData({ brNumber: e.target.value })}
                                    placeholder="BR Number"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">BR Phone Number*</label>
                                <input
                                    type="tel"
                                    value={data.brPhoneNumber}
                                    onChange={(e) => updateData({ brPhoneNumber: e.target.value })}
                                    placeholder="Enter Business Phone"
                                    className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 font-mono"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm text-slate-600 flex items-center">
                                    BR Document* <span className="ml-1 text-slate-400 text-xs">(Pdf, Jpg, Png)</span>
                                </label>
                                <div className="max-w-md">
                                    <FileUploadInput
                                        value={data.brDocument}
                                        onFileSelect={(fileName) => updateData({ brDocument: fileName })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tax Registration */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-slate-800 text-base sm:text-lg">Tax Registration</h3>
                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm text-slate-700">Tax Registered</p>
                            <div className="flex bg-slate-100 rounded-full p-1 inline-flex">
                                <button
                                    type="button"
                                    onClick={() => updateData({ taxRegistered: true })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${data.taxRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateData({ taxRegistered: false })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${!data.taxRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                    {data.taxRegistered && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 animate-fade-in-up">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Tin Number*</label>
                                <input
                                    type="text"
                                    value={data.tinNumber}
                                    onChange={(e) => updateData({ tinNumber: e.target.value })}
                                    placeholder="Tin Number"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm text-slate-600 flex items-center">
                                    Tax Certificate* <span className="ml-1 text-slate-400 text-xs">(Pdf)</span>
                                </label>
                                <FileUploadInput
                                    value={data.taxCertificate}
                                    onFileSelect={(fileName) => updateData({ taxCertificate: fileName })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm text-slate-600 flex items-center">
                                    TDL <span className="ml-1 text-slate-400 text-xs">(Pdf, Jpg, Png)</span>
                                </label>
                                <FileUploadInput
                                    value={data.tdlDocument}
                                    onFileSelect={(fileName) => updateData({ tdlDocument: fileName })}
                                />
                            </div>
                        </div>
                    )}

                    {/* VAT Registered */}
                    <div className="space-y-2">
                        <h3 className="font-semibold text-slate-800 text-base sm:text-lg">VAT Registered</h3>
                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm text-slate-700">VAT Registered</p>
                            <div className="flex bg-slate-100 rounded-full p-1 inline-flex">
                                <button
                                    type="button"
                                    onClick={() => updateData({ vatRegistered: true })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${data.vatRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateData({ vatRegistered: false })}
                                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${!data.vatRegistered ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                    {data.vatRegistered && (
                        <div className="pt-4 animate-fade-in-up">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">VAT Number*</label>
                                <input
                                    type="text"
                                    value={data.vatNumber}
                                    onChange={(e) => updateData({ vatNumber: e.target.value })}
                                    placeholder="VAT Number"
                                    className="w-full max-w-md px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>
                        </div>
                    )}

                    {/* Personal Details (NIC) */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-800 text-base sm:text-lg">Personal Details</h3>

                        <div className="space-y-4">
                            <p className="text-xs sm:text-sm font-medium text-slate-700">NIC</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                                {/* Front Upload */}
                                <div className="space-y-2">
                                    <label className="block text-sm text-slate-600">Front*</label>
                                    <FileUploadInput
                                        value={data.nicFront}
                                        onFileSelect={(fileName) => updateData({ nicFront: fileName })}
                                    />
                                </div>

                                {/* Back Upload */}
                                <div className="space-y-2">
                                    <label className="block text-sm text-slate-600">Back*</label>
                                    <FileUploadInput
                                        value={data.nicBack}
                                        onFileSelect={(fileName) => updateData({ nicBack: fileName })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-between items-center pt-8 gap-3">
                        <button
                            type="button"
                            onClick={onPrev}
                            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-full transition-all flex items-center shadow-sm text-sm sm:text-base"
                        >
                            <ArrowLeft size={16} className="mr-1 sm:mr-2" />
                            Prev
                        </button>

                        <button
                            type="button"
                            onClick={onNext}
                            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-md flex items-center text-sm sm:text-base"
                        >
                            Next
                            <ArrowRight size={16} className="ml-1 sm:ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
