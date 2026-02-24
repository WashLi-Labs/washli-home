import React from "react";
import { ArrowLeft, ArrowRight, Clock, Mail, Phone } from "lucide-react";
import { SignUpFormData, OperatingHour } from "../types";

interface Step2Props {
    onNext: () => void;
    onPrev: () => void;
    data: SignUpFormData;
    updateData: (updates: Partial<SignUpFormData>) => void;
}

export const Step2ContactInfo: React.FC<Step2Props> = ({ onNext, onPrev, data, updateData }) => {
    const handleHourChange = (index: number, field: keyof OperatingHour, value: string | boolean) => {
        const newHours = [...data.operatingHours];
        newHours[index] = { ...newHours[index], [field]: value };
        updateData({ operatingHours: newHours });
    };

    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
            </div>

            <form className="space-y-8">
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Owner Details */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Owner Name*</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={data.ownerName}
                                    onChange={(e) => updateData({ ownerName: e.target.value })}
                                    placeholder="Enter Owner Name"
                                    className="w-full pl-4 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Owner Phone Number*</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={data.ownerPhone}
                                    onChange={(e) => updateData({ ownerPhone: e.target.value })}
                                    placeholder="Enter Phone Number"
                                    className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Owner Email*</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={data.ownerEmail}
                                    onChange={(e) => updateData({ ownerEmail: e.target.value })}
                                    placeholder="your email "
                                    className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Outlet Manager Details */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Name*</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={data.managerName}
                                    onChange={(e) => updateData({ managerName: e.target.value })}
                                    placeholder="Enter Manager Name"
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Phone Number*</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={data.managerPhone}
                                    onChange={(e) => updateData({ managerPhone: e.target.value })}
                                    placeholder="Enter Phone Number"
                                    className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Empty placeholder to align with Owner Name if needed or just flow naturally */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Email*</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={data.managerEmail}
                                    onChange={(e) => updateData({ managerEmail: e.target.value })}
                                    placeholder="your email "
                                    className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Days/Hours Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">Operating Days/Hours</h3>
                    <p className="text-sm text-slate-500 leading-relaxed text-justify">
                        If your business needs to operate outside its usual hours, reach out to your dedicated account manager (when assigned).
                        They can help ensure your operating hours are accurately reflected and avoid any confusion for customers.
                        This way, both our platform and your customers are kept informed, leading to a smoother experience for everyone!
                    </p>
                </div>

                {/* Schedule Table */}
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                        <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 min-w-[600px] sm:min-w-0">
                            {/* Header */}
                            <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                                <span className="font-semibold text-sm sm:text-base">Days</span>
                                <span className="font-semibold text-sm sm:text-base mr-8 sm:mr-12">Hours (Open/Close)</span>
                            </div>

                            {/* Rows */}
                            <div className="divide-y divide-slate-200">
                                {data.operatingHours.map((hour, index) => (
                                    <div key={hour.day} className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-white/50 hover:bg-white transition-colors">
                                        <span className="font-medium text-slate-700 min-w-[80px] sm:min-w-[100px] text-sm sm:text-base">{hour.day}</span>

                                        <div className="flex items-center gap-3 sm:gap-4 justify-end">
                                            <label className="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer shrink-0">
                                                <input
                                                    type="checkbox"
                                                    checked={!hour.isOpen}
                                                    onChange={(e) => handleHourChange(index, "isOpen", !e.target.checked)}
                                                    className="w-4 h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-400"
                                                />
                                                <span className="text-xs sm:text-sm text-slate-600">Close</span>
                                            </label>

                                            <div className={`flex items-center gap-2 sm:gap-3 transition-opacity ${!hour.isOpen ? "opacity-50 pointer-events-none" : ""}`}>
                                                <div className="relative">
                                                    <input
                                                        type="time"
                                                        value={hour.openTime}
                                                        onChange={(e) => handleHourChange(index, "openTime", e.target.value)}
                                                        className="pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 w-[110px] sm:w-auto"
                                                    />
                                                    <Clock className="absolute left-2 sm:left-2.5 top-2 sm:top-2.5 text-slate-400" size={12} />
                                                </div>
                                                <span className="text-slate-400 text-sm">—</span>
                                                <div className="relative">
                                                    <input
                                                        type="time"
                                                        value={hour.closeTime}
                                                        onChange={(e) => handleHourChange(index, "closeTime", e.target.value)}
                                                        className="pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 w-[110px] sm:w-auto"
                                                    />
                                                    <Clock className="absolute left-2 sm:left-2.5 top-2 sm:top-2.5 text-slate-400" size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
