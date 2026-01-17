import React, { useState } from "react";
import { Check, Info } from "lucide-react";

interface Step1Props {
    onNext: () => void;
}

export const Step1MerchantSignup: React.FC<Step1Props> = ({ onNext }) => {
    // Mock state for the form - in a real app, this would be lifted up or in a context
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(false);

    return (
        <div className="animate-fade-in-up">
            <div className="mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Merchant Signup</h2>
            </div>

            <form className="space-y-6">
                {/* Email Section */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">email*</label>
                    <div className="flex flex-col space-y-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full max-w-md px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        {verified && (
                            <div className="flex items-center text-green-500 text-sm font-medium mt-1">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center mr-2 text-xs">✓</span>
                                Email verified
                            </div>
                        )}

                    </div>
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2 pt-4">
                    <label className="block text-sm font-medium text-slate-700">How did you hear about us?*</label>
                    <select className="w-full max-w-md px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
                        <option value="" disabled selected>Select an option</option>
                        <option>Social Media</option>
                        <option>Friend</option>
                        <option>Advertisement</option>
                    </select>
                </div>

                {/* Radio Group */}
                <div className="flex items-center space-x-6 pt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="outletType" defaultChecked className="w-4 h-4 text-sky-500 focus:ring-sky-400" />
                        <span className="text-sm font-medium text-slate-700">Main Outlet*</span>
                        <Info size={14} className="text-slate-400" />
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="outletType" className="w-4 h-4 text-sky-500 focus:ring-sky-400" />
                        <span className="text-sm font-medium text-slate-700">Branch Outlet*</span>
                        <Info size={14} className="text-slate-400" />
                    </label>
                </div>

                {/* Grid for other fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Region*</label>
                        <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
                            <option value="" disabled selected>Select Region</option>
                            <option>Embilipitiya</option>
                            <option>Colombo</option>
                            <option>Kandy</option>
                        </select>
                    </div>
                    {/* Empty col for spacing or matching styles if needed, but design has fields side by side below */}
                    <div className="hidden md:block"></div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Merchant Type*</label>
                        <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
                            <option value="" disabled selected>Select Merchant Type</option>
                            <option>Dining Restaurant</option>
                            <option>Cafe</option>
                            <option>Supermarket</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Outlet Name*</label>
                        <input type="text" placeholder="Enter Outlet Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700">Outlet Address*</label>
                        <input type="text" placeholder="Enter Outlet Address" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">City*</label>
                        <input type="text" placeholder="Enter City" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Phone Number*</label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Phone Number" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                            {/* Placeholder icon */}
                            <div className="absolute left-3 top-3.5 text-slate-400">📞</div>
                        </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700">Pin* <Info size={14} className="inline text-slate-400" /></label>
                        <div className="flex space-x-4">
                            <div className="relative flex-1">
                                <input type="text" placeholder="Lat, Long" className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" />
                                <div className="absolute left-3 top-3.5 text-slate-400">📍</div>
                            </div>
                            <button type="button" className="px-6 py-3 bg-sky-500 hover:bg-sky-600 font-semibold rounded-lg text-sm transition-colors whitespace-nowrap text-white">
                                Pick Location
                            </button>
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                <div className="flex justify-end pt-8">
                    <button
                        type="button"
                        onClick={onNext}
                        className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-md flex items-center"
                    >
                        Signup and Continue
                        <span className="ml-2">→</span>
                    </button>
                </div>
            </form>
        </div>
    );
};
