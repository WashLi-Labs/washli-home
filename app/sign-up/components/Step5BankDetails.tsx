import React from "react";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";

interface Step5Props {
    onNext: () => void;
    onPrev: () => void;
}

export const Step5BankDetails: React.FC<Step5Props> = ({ onNext, onPrev }) => {
    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Bank Details</h2>
            </div>

            <form className="space-y-8">
                {/* Bank Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Beneficiary Name*</label>
                        <input type="text" placeholder="Beneficiary Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Account Number*</label>
                        <input type="text" placeholder="Account Number" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Bank Name*</label>
                        <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600">
                            <option value="" disabled selected>Select</option>
                            <option>Bank of Ceylon</option>
                            <option>Commercial Bank</option>
                            <option>HNB</option>
                            <option>Sampath Bank</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Branch Name*</label>
                        <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600">
                            <option value="" disabled selected>Select</option>
                            <option>Colombo</option>
                            <option>Kandy</option>
                            <option>Galle</option>
                        </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700">Soft Copy of the Bank Statement Or Passbook*</label>
                        <div className="flex rounded-lg overflow-hidden border border-slate-200 max-w-md">
                            <input
                                type="text"
                                placeholder="No file chosen"
                                readOnly
                                className="flex-1 px-4 py-3 bg-white text-sm text-slate-500 focus:outline-none"
                            />
                            <button type="button" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 font-medium text-white text-sm flex items-center transition-colors">
                                <Upload size={16} className="mr-2" />
                                Upload
                            </button>
                        </div>
                    </div>
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
