import React from "react";
import { ArrowLeft, ArrowRight, Clock, Mail, Phone, User } from "lucide-react";

interface Step2Props {
    onNext: () => void;
    onPrev: () => void;
}

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export const Step2ContactInfo: React.FC<Step2Props> = ({ onNext, onPrev }) => {
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
                                <input type="text" placeholder="Enter Owner Name" className="w-full pl-4 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Owner Phone Number*</label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Phone Number" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Owner Email*</label>
                            <div className="relative">
                                <input type="email" placeholder="Enter Owner Email" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Outlet Manager Details */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Name*</label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Manager Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Phone Number*</label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Phone Number" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Empty placeholder to align with Owner Name if needed or just flow naturally */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Outlet Manager Email*</label>
                            <div className="relative">
                                <input type="email" placeholder="Enter Manager Email" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                <Mail className="absolute left-3 top-3.5 text-slate-400" size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operating Days/Hours Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800">Operating Days/Hours</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        If your business needs to operate outside its usual hours, reach out to your dedicated account manager (when assigned).
                        They can help ensure your operating hours are accurately reflected and avoid any confusion for customers.
                        This way, both our platform and your customers are kept informed, leading to a smoother experience for everyone!
                    </p>
                </div>

                {/* Schedule Table */}
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
                    {/* Header */}
                    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
                        <span className="font-semibold">Days</span>
                        <span className="font-semibold mr-12">Hours (Open/Close)</span>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-slate-200">
                        {days.map((day) => (
                            <div key={day} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/50 hover:bg-white transition-colors">
                                <span className="font-medium text-slate-700 min-w-[100px]">{day}</span>

                                <div className="flex items-center gap-6">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-sky-500 focus:ring-sky-400" />
                                        <span className="text-sm text-slate-600">Close</span>
                                    </label>

                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <input type="time" defaultValue="05:30" className="pl-8 pr-2 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                            <Clock className="absolute left-2.5 top-2.5 text-slate-400" size={14} />
                                        </div>
                                        <span className="text-slate-400">—</span>
                                        <div className="relative">
                                            <input type="time" defaultValue="17:30" className="pl-8 pr-2 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                            <Clock className="absolute left-2.5 top-2.5 text-slate-400" size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
