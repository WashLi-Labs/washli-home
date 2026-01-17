import React from "react";
import { ArrowLeft, Edit2 } from "lucide-react";

interface Step6Props {
    onPrev: () => void;
    onSubmit: () => void;
}

export const Step6Summary: React.FC<Step6Props> = ({ onPrev, onSubmit }) => {
    return (
        <div className="animate-fade-in-up space-y-8">
            <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-800">Summary</h2>
            </div>

            <div className="space-y-6">

                {/* Merchant Signup Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-4">Merchant Signup</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">How did you hear about us?</p>
                            <p className="font-medium text-slate-800">Walk-in</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Email</p>
                            <p className="font-medium text-slate-800">vg.pandula@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Main Outlet or Branch Outlet?</p>
                            <p className="font-medium text-slate-800">Main Outlet</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Merchant Id</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Region</p>
                            <p className="font-medium text-slate-800">Colombo</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Merchant Type</p>
                            <p className="font-medium text-slate-800">Enterprise</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Name</p>
                            <p className="font-medium text-slate-800">kkk</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Address</p>
                            <p className="font-medium text-slate-800">No 137, Rajagiriya Rd,</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Phone Number</p>
                            <p className="font-medium text-slate-800">0715878774</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">City</p>
                            <p className="font-medium text-slate-800">Embilipitiya</p>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-slate-500 mb-1">Pin</p>
                            <p className="font-medium text-slate-800">6.911872530707622, 79.89729023890938</p>
                        </div>
                    </div>
                </div>

                {/* Contact Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Contact Information</h3>
                        <button className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium">
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Owner Name*</p>
                            <p className="font-medium text-slate-800">asasa</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Owner Email*</p>
                            <p className="font-medium text-slate-800">vg.pandula@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Owner Phone Number*</p>
                            <p className="font-medium text-slate-800">0715878774</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Name*</p>
                            <p className="font-medium text-slate-800">Pandu</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Phone Number*</p>
                            <p className="font-medium text-slate-800">0715878774</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Email*</p>
                            <p className="font-medium text-slate-800">vg.pandula@gmail.com</p>
                        </div>
                    </div>

                    {/* Operating Hours Table Preview */}
                    <div className="mt-6">
                        <div className="grid grid-cols-1 text-xs gap-y-2">
                            <div className="flex bg-sky-100/50 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Monday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/30 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Tuesday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/50 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Wednesday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/30 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Thursday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/50 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Friday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/30 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Saturday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                            <div className="flex bg-sky-100/50 p-2 rounded">
                                <span className="w-24 font-medium text-slate-700">Sunday:</span>
                                <span className="text-slate-600 mr-4">Open</span>
                                <span className="text-slate-600 mr-4">Open: 05:30:00</span>
                                <span className="text-slate-600">Close: 05:30:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Business Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Business Information</h3>
                        <button className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium">
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Business Registered</p>
                            <p className="font-medium text-slate-800">No</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Parent name as per BR*</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">BR Number*</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">BR Document</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Tax Registered</p>
                            <p className="font-medium text-slate-800">No</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Tin Number*</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Tax Certificate*</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">TDL</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">VAT Registered</p>
                            <p className="font-medium text-slate-800">No</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">VAT Number*</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">NIC Front</p>
                            <p className="font-medium text-slate-800">Document Attached</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">NIC Back</p>
                            <p className="font-medium text-slate-800">Document Attached</p>
                        </div>
                    </div>
                </div>

                {/* Menu Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Menu Information</h3>
                        <button className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium">
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Menu*</p>
                            <p className="font-medium text-slate-800">Document Attached</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Logo*</p>
                            <p className="font-medium text-slate-800">Document Attached</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Do you have images you can provide?</p>
                            <p className="font-medium text-slate-800">no</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Upload Images</p>
                            <p className="font-medium text-slate-800">No Document</p>
                        </div>
                    </div>
                </div>

                {/* Bank Details Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Bank Details</h3>
                        <button className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium">
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Beneficiary Name*</p>
                            <p className="font-medium text-slate-800">gignann sada</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Account Number*</p>
                            <p className="font-medium text-slate-800">4542342524245254252</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Bank Name*</p>
                            <p className="font-medium text-slate-800">Commercial Credit & Finance PLC</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Branch Name*</p>
                            <p className="font-medium text-slate-800">Anuradhapura</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Branch Code*</p>
                            <p className="font-medium text-slate-800">76</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Soft Copy of the Bank Statement Or Passbook*</p>
                            <p className="font-medium text-slate-800">Document Attached</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Actions */}
            <div className="flex justify-start pt-8">
                <button
                    type="button"
                    onClick={onSubmit}
                    className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-md flex items-center"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
