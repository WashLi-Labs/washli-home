import React, { useState, useEffect } from "react";
import { Check, Info, Phone, MapPin, ArrowRight, ChevronDown, RefreshCw, Lock } from "lucide-react";
import { LocationPickerModal } from "./LocationPickerModal";
import { SignUpFormData } from "../types";

interface Step1Props {
    onNext: () => void;
    data: SignUpFormData;
    updateData: (updates: Partial<SignUpFormData>) => void;
}

export const Step1MerchantSignup: React.FC<Step1Props> = ({ onNext, data, updateData }) => {

    // Helper to generate random captcha
    const generateCaptcha = () => {
        const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }
        return captcha;
    };

    // Captcha State (Transient)
    const [captchaValue, setCaptchaValue] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");

    // Initialize captcha on mount
    useEffect(() => {
        setCaptchaValue(generateCaptcha());
    }, []);

    const handleRefreshCaptcha = () => {
        setCaptchaValue(generateCaptcha());
        setCaptchaInput("");
    };
    
    // OTP State (Transient)
    const [otpSent, setOtpSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [timer, setTimer] = useState(59);

    // Form State (UI specific)
    const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (otpSent && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [otpSent, timer]);

    const handleSendOTP = () => {
        if (captchaInput.toLowerCase() !== captchaValue.toLowerCase()) {
            alert("Invalid Captcha");
            return;
        }
        if (!data.email) {
            alert("Please enter email");
            return;
        }
        setOtpSent(true);
        setTimer(59);
    };

    const handleVerify = () => {
        // Mock verification
        if (verificationCode) {
            updateData({ isEmailVerified: true });
        } else {
            alert("Please enter verification code");
        }
    };

    const handleChangeEmail = () => {
        setOtpSent(false);
        updateData({ isEmailVerified: false, email: "" });
        setCaptchaInput("");
        setVerificationCode("");
        setCaptchaValue(generateCaptcha()); // Refresh captcha on email change
    };

    return (
        <div className="animate-fade-in-up">
            <div className="mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Merchant Signup</h2>
            </div>

            <form className="space-y-6">
                
                {/* Email Verification Section */}
                {!data.isEmailVerified ? (
                    <div className="space-y-6">
                        {/* Captcha Section */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Captcha*</label>
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 px-6 py-3 rounded-lg select-none font-mono text-xl tracking-widest text-slate-500 line-through decoration-pink-500 decoration-2 italic font-bold border border-slate-200" style={{ letterSpacing: '0.5em', background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIi8+CjxwYXRoIGQ9Ik0wIDUwTDUwIDAiIHN0cm9rZT0iI2RiZNWNlIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+') opacity-50"}}>
                                   {captchaValue}
                                </div>
                                <button type="button" onClick={handleRefreshCaptcha} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <RefreshCw size={20} className="text-slate-600" />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                placeholder="Please Insert Captcha"
                                className="w-full max-w-md px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 mt-2"
                            />
                        </div>

                        {/* Email & OTP Row */}
                        {!otpSent ? (
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Email*</label>
                                <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
                                    <div className="flex-1">
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => updateData({ email: e.target.value })}
                                            placeholder="vg.pandula@gmail.com"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleSendOTP}
                                        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // OTP Sent View
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Email*</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="email"
                                                value={data.email}
                                                readOnly
                                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none"
                                            />
                                            <button
                                                type="button"
                                                disabled={timer > 0}
                                                className={`px-4 py-3 bg-sky-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap text-sm ${timer > 0 ? 'opacity-80 cursor-not-allowed' : 'hover:bg-sky-600'}`}
                                            >
                                                {timer > 0 ? `Resend OTP (0:${timer.toString().padStart(2, '0')})` : "Resend OTP"}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-slate-700">Verify*</label>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <input
                                                type="text"
                                                value={verificationCode}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (/^\d{0,6}$/.test(value)) {
                                                        setVerificationCode(value);
                                                    }
                                                }}
                                                placeholder="Verification Code"
                                                className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                            />
                                                <Lock className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleVerify}
                                                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                                            >
                                                Verify
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <button
                                        type="button"
                                        onClick={handleChangeEmail}
                                        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors"
                                    >
                                        Change Email
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // Full Form Context (Verified)
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">Email*</label>
                            <input
                                type="email"
                                value={data.email}
                                readOnly
                                className="w-full max-w-md px-4 py-3 bg-gray-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none"
                            />
                            <div className="flex items-center text-green-500 text-sm font-medium mt-1">
                                <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center mr-2">
                                    <Check size={12} strokeWidth={3} />
                                </span>
                                Email verified
                            </div>
                        </div>

                        {/* How did you hear about us */}
                        <div className="space-y-2 pt-2">
                            <label className="block text-sm font-medium text-slate-700">How did you hear about us?*</label>
                            <div className="relative max-w-md">
                                <select 
                                    value={data.howDidYouHear}
                                    onChange={(e) => updateData({ howDidYouHear: e.target.value })}
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none"
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option>Social Media</option>
                                    <option>Friend</option>
                                    <option>Advertisement</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        {/* Grid for other fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Region*</label>
                                <div className="relative">
                                    <select 
                                        value={data.region}
                                        onChange={(e) => updateData({ region: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none"
                                    >
                                        <option value="" disabled>Select Region</option>
                                        <option>Embilipitiya</option>
                                        <option>Colombo</option>
                                        <option>Kandy</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                </div>
                            </div>
                            <div className="hidden md:block"></div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Merchant Type*</label>
                                <div className="relative">
                                    <select 
                                        value={data.merchantType}
                                        onChange={(e) => updateData({ merchantType: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 appearance-none"
                                    >
                                        <option value="" disabled>Select Merchant Type</option>
                                        <option>Laundromat</option>
                                        <option>Wash & Fold</option>
                                        <option>Dry Cleaner</option>
                                        <option>Commercial Laundry</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Outlet Name*</label>
                                <input 
                                    type="text" 
                                    value={data.outletName}
                                    onChange={(e) => updateData({ outletName: e.target.value })}
                                    placeholder="Enter Outlet Name" 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700">Outlet Address*</label>
                                <input 
                                    type="text" 
                                    value={data.outletAddress}
                                    onChange={(e) => updateData({ outletAddress: e.target.value })}
                                    placeholder="Enter Outlet Address" 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">City*</label>
                                <input 
                                    type="text" 
                                    value={data.city}
                                    onChange={(e) => updateData({ city: e.target.value })}
                                    placeholder="Enter City" 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">Phone Number*</label>
                                <div className="relative">
                                    <input 
                                        type="text" 
                                        value={data.phoneNumber}
                                        onChange={(e) => updateData({ phoneNumber: e.target.value })}
                                        placeholder="Enter Phone Number" 
                                        className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                                    />
                                    {/* Placeholder icon */}
                                    <Phone className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-slate-700">Pin* <Info size={14} className="inline text-slate-400" /></label>
                                <div className="flex space-x-4">
                                    <div className="relative flex-1">
                                        <input 
                                            type="text" 
                                            placeholder="Lat, Long" 
                                            className="w-full pl-10 px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                                            value={data.location ? `${data.location.lat.toFixed(4)}, ${data.location.lng.toFixed(4)}` : ""}
                                            readOnly
                                        />
                                        <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                                    </div>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsLocationPickerOpen(true)}
                                        className="px-6 py-3 bg-sky-500 hover:bg-sky-600 font-semibold rounded-lg text-sm transition-colors whitespace-nowrap text-white"
                                    >
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
                                <ArrowRight size={20} className="ml-2" />
                            </button>
                        </div>
                    </div>
                )}
            </form>
            
            <LocationPickerModal
                isOpen={isLocationPickerOpen}
                onClose={() => setIsLocationPickerOpen(false)}
                onSelectLocation={(loc) => updateData({ location: loc })}
                initialLocation={data.location || undefined}
            />
        </div>
    );
};
