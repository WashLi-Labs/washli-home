import React from "react";
import { ArrowLeft, ArrowRight, Download, HelpCircle, ChevronDown } from "lucide-react";
import { SignUpFormData } from "../types";
import { FileUploadInput } from "./FileUploadInput";

interface Step4Props {
    onNext: () => void;
    onPrev: () => void;
    data: SignUpFormData;
    updateData: (updates: Partial<SignUpFormData>) => void;
}

export const Step4MenuInfo: React.FC<Step4Props> = ({ onNext, onPrev, data, updateData }) => {
    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Menu Information</h2>
            </div>

            <form className="space-y-8">
                {/* Upload Menu Items Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">Upload Menu Items</h3>

                    {/* Template Download */}
                    <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-800">Click Here to Download Template - WashLi Food/ Market</span>
                        <button type="button" className="p-2 bg-sky-500 hover:bg-sky-600 rounded-full text-white transition-colors">
                            <Download size={18} />
                        </button>
                    </div>
                </div>

                {/* Upload Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="block text-sm text-slate-600 flex items-center">
                            Menu* <HelpCircle size={14} className="ml-1 text-slate-400" />
                        </label>
                        <FileUploadInput
                            value={data.menuDocument}
                            onFileSelect={(fileName) => updateData({ menuDocument: fileName })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm text-slate-600 flex items-center">
                            Outlet Logo* <HelpCircle size={14} className="ml-1 text-slate-400" />
                        </label>
                        <FileUploadInput
                            value={data.outletLogo}
                            onFileSelect={(fileName) => updateData({ outletLogo: fileName })}
                        />
                    </div>
                </div>

                {/* Item Images Section */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">Item Images</h3>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Do you have images you can provide?*</label>
                        <div className="relative max-w-md">
                            <select
                                value={data.hasImages}
                                onChange={(e) => updateData({ hasImages: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600 appearance-none"
                            >
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    {data.hasImages === "Yes" && (
                        <div className="space-y-2 animate-fade-in-up">
                            <label className="block text-sm text-slate-600 flex items-center">
                                Upload Images* <HelpCircle size={14} className="ml-1 text-slate-400" />
                            </label>
                             <div className="max-w-md">
                                <FileUploadInput
                                    value={data.itemImages}
                                    onFileSelect={(fileName) => updateData({ itemImages: fileName })}
                                />
                             </div>
                        </div>
                    )}

                    <p className="text-sm text-slate-500 leading-relaxed max-w-2xl text-justify">
                        Images enhance the way merchants engage with customers, making them essential. If you lack images, don&apos;t hesitate to contact your Account Manager for support when assigned
                    </p>
                </div>

                {/* Note */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-slate-800 text-sm">Note:</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-3xl text-justify">
                        Please be advised that any delay in the onboarding process may occur if incorrect documentation is provided.
                        It is imperative to ensure that all documentation submitted is accurate and complete to avoid any potential delays
                    </p>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-between items-center pt-8">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-full transition-all flex items-center shadow-sm"
                    >
                        <ArrowLeft size={18} className="mr-2" />
                        Prev
                    </button>

                    <button
                        type="button"
                        onClick={onNext}
                        className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-md flex items-center"
                    >
                        Next
                        <ArrowRight size={18} className="ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};
