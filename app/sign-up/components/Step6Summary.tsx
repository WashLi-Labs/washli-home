import React from "react";
import { ArrowLeft, Edit2, FileText } from "lucide-react";
import { SignUpFormData, OperatingHour } from "../types";

interface Step6Props {
    onPrev: () => void;
    onSubmit: () => void;
    data: SignUpFormData;
    onGoToStep?: (step: number) => void;
}

export const Step6Summary: React.FC<Step6Props> = ({ onPrev, onSubmit, data, onGoToStep }) => {

    const formatTime = (time: string) => time || "N/A";
    const formatBool = (val: boolean) => val ? "Yes" : "No";

    const renderValue = (value: string | undefined | null) => {
        if (!value) return "N/A";
        if (typeof value === 'string') {
            if (value.startsWith("data:image")) {
                return (
                    <div className="mt-1">
                        <img
                            src={value}
                            alt="Preview"
                            className="max-h-40 max-w-full rounded-md border border-slate-200 shadow-sm object-contain"
                        />
                    </div>
                );
            }
            if (value.startsWith("data:application/pdf")) {
                return (
                    <div className="mt-1 flex items-center space-x-2 p-2 bg-slate-100 rounded border border-slate-200 w-fit">
                        <FileText size={20} className="text-slate-500" />
                        <span className="text-slate-600 text-sm font-medium">PDF Document</span>
                        <a
                            href={value}
                            download="document.pdf"
                            className="text-sky-600 text-xs font-medium hover:underline ml-2"
                        >
                            Download
                        </a>
                    </div>
                );
            }
        }
        if (value.length > 50) return <span title={value} className="break-all">{value.substring(0, 50)}...</span>;
        return <span className="break-all">{value}</span>;
    };

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
                            <p className="font-medium text-slate-800">{data.howDidYouHear || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Email</p>
                            <p className="font-medium text-slate-800">{data.email || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Main Outlet or Branch Outlet?</p>
                            <p className="font-medium text-slate-800">Main Outlet</p> {/* Hardcoded as not in form? */}
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Merchant Id</p>
                            <p className="font-medium text-slate-800">N/A</p>
                        </div>

                        <div>
                            <p className="text-slate-500 mb-1">Merchant Type</p>
                            <p className="font-medium text-slate-800">{data.merchantType || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Name</p>
                            <p className="font-medium text-slate-800">{data.outletName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Address</p>
                            <p className="font-medium text-slate-800">{data.outletAddress || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Phone Number</p>
                            <p className="font-medium text-slate-800">{data.phoneNumber || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">City</p>
                            <p className="font-medium text-slate-800">{data.city || "N/A"}</p>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-slate-500 mb-1">Pin</p>
                            <p className="font-medium text-slate-800">
                                {data.location ? `${data.location.lat.toFixed(6)}, ${data.location.lng.toFixed(6)}` : "N/A"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Contact Information</h3>
                        <button
                            type="button"
                            onClick={() => onGoToStep?.(2)}
                            className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium"
                        >
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Owner Name*</p>
                            <p className="font-medium text-slate-800">{data.ownerName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Owner Email*</p>
                            <p className="font-medium text-slate-800">{data.ownerEmail || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Owner Phone Number*</p>
                            <p className="font-medium text-slate-800">{data.ownerPhone || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Name*</p>
                            <p className="font-medium text-slate-800">{data.managerName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Phone Number*</p>
                            <p className="font-medium text-slate-800">{data.managerPhone || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Manager Email*</p>
                            <p className="font-medium text-slate-800">{data.managerEmail || "N/A"}</p>
                        </div>
                    </div>

                    {/* Operating Hours Table Preview */}
                    <div className="mt-6">
                        <div className="grid grid-cols-1 text-xs gap-y-2">
                            {data.operatingHours.map((hour, index) => (
                                <div key={hour.day} className={`flex p-2 rounded ${index % 2 === 0 ? 'bg-sky-100/50' : 'bg-sky-100/30'}`}>
                                    <span className="w-24 font-medium text-slate-700">{hour.day}:</span>
                                    <span className="text-slate-600 mr-4">{hour.isOpen ? "Open" : "Closed"}</span>
                                    {hour.isOpen && (
                                        <>
                                            <span className="text-slate-600 mr-4">Open: {formatTime(hour.openTime)}</span>
                                            <span className="text-slate-600">Close: {formatTime(hour.closeTime)}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Business Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Business Information</h3>
                        <button
                            type="button"
                            onClick={() => onGoToStep?.(3)}
                            className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium"
                        >
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Business Registered</p>
                            <p className="font-medium text-slate-800">{formatBool(data.businessRegistered)}</p>
                        </div>
                        {data.businessRegistered && (
                            <>
                                <div>
                                    <p className="text-slate-500 mb-1">Parent name as per BR*</p>
                                    <p className="font-medium text-slate-800">{data.parentName || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">BR Number*</p>
                                    <p className="font-medium text-slate-800">{data.brNumber || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">BR Document</p>
                                    <div className="font-medium text-slate-800">{renderValue(data.brDocument)}</div>
                                </div>
                            </>
                        )}
                        <div>
                            <p className="text-slate-500 mb-1">Tax Registered</p>
                            <p className="font-medium text-slate-800">{formatBool(data.taxRegistered)}</p>
                        </div>
                        {data.taxRegistered && (
                            <>
                                <div>
                                    <p className="text-slate-500 mb-1">Tin Number*</p>
                                    <p className="font-medium text-slate-800">{data.tinNumber || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">Tax Certificate*</p>
                                    <div className="font-medium text-slate-800">{renderValue(data.taxCertificate)}</div>
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">TDL</p>
                                    <div className="font-medium text-slate-800">{renderValue(data.tdlDocument)}</div>
                                </div>
                            </>
                        )}
                        <div>
                            <p className="text-slate-500 mb-1">VAT Registered</p>
                            <p className="font-medium text-slate-800">{formatBool(data.vatRegistered)}</p>
                        </div>
                        {data.vatRegistered && (
                            <div>
                                <p className="text-slate-500 mb-1">VAT Number*</p>
                                <p className="font-medium text-slate-800">{data.vatNumber || "N/A"}</p>
                            </div>
                        )}
                        <div>
                            <p className="text-slate-500 mb-1">NIC Front</p>
                            <div className="font-medium text-slate-800">{renderValue(data.nicFront)}</div>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">NIC Back</p>
                            <div className="font-medium text-slate-800">{renderValue(data.nicBack)}</div>
                        </div>
                    </div>
                </div>

                {/* Menu Information Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Menu Information</h3>
                        <button
                            type="button"
                            onClick={() => onGoToStep?.(4)}
                            className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium"
                        >
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Menu*</p>
                            <div className="font-medium text-slate-800">{renderValue(data.menuDocument)}</div>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Outlet Logo*</p>
                            <div className="font-medium text-slate-800">{renderValue(data.outletLogo)}</div>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Do you have images you can provide?</p>
                            <p className="font-medium text-slate-800">{data.hasImages}</p>
                        </div>
                        {data.hasImages === 'Yes' && (
                            <div>
                                <p className="text-slate-500 mb-1">Upload Images</p>
                                <div className="font-medium text-slate-800">{renderValue(data.itemImages)}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bank Details Summary */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-slate-800">Bank Details</h3>
                        <button
                            type="button"
                            onClick={() => onGoToStep?.(5)}
                            className="text-slate-400 hover:text-slate-600 flex items-center text-xs font-medium"
                        >
                            Edit <Edit2 size={12} className="ml-1" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Beneficiary Name*</p>
                            <p className="font-medium text-slate-800">{data.beneficiaryName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Account Number*</p>
                            <p className="font-medium text-slate-800">{data.accountNumber || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Bank Name*</p>
                            <p className="font-medium text-slate-800">{data.bankName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Branch Name*</p>
                            <p className="font-medium text-slate-800">{data.branchName || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Branch Code*</p>
                            <p className="font-medium text-slate-800">{data.branchCode || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Soft Copy of the Bank Statement Or Passbook*</p>
                            <div className="font-medium text-slate-800">{renderValue(data.bankStatement)}</div>
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
                    onClick={onSubmit}
                    className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-md flex items-center"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
