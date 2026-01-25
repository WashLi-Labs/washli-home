import React from "react";
import { ArrowLeft, ArrowRight, Upload, ChevronDown } from "lucide-react";
import { SignUpFormData } from "../types";
import { FileUploadInput } from "./FileUploadInput";

interface Step5Props {
    onNext: () => void;
    onPrev: () => void;
    data: SignUpFormData;
    updateData: (updates: Partial<SignUpFormData>) => void;
}

export const Step5BankDetails: React.FC<Step5Props> = ({ onNext, onPrev, data, updateData }) => {
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
                        <input 
                            type="text" 
                            value={data.beneficiaryName}
                            onChange={(e) => updateData({ beneficiaryName: e.target.value })}
                            placeholder="Beneficiary Name" 
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Account Number*</label>
                        <input 
                            type="text" 
                            value={data.accountNumber}
                            onChange={(e) => updateData({ accountNumber: e.target.value })}
                            placeholder="Account Number" 
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Bank Name*</label>
                        <div className="relative">
                            <select 
                                value={data.bankName}
                                onChange={(e) => updateData({ bankName: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600 appearance-none"
                            >
                                <option value="" disabled>Select</option>
                                <option>Amana Bank</option>
                                <option>Bank of Ceylon (BOC)</option>
                                <option>Bank of China</option>
                                <option>Cargills Bank</option>
                                <option>Central Bank of Sri Lanka</option>
                                <option>Citi Bank</option>
                                <option>Commercial Bank of Ceylon</option>
                                <option>Deutsche Bank</option>
                                <option>DFCC Bank</option>
                                <option>Habib Bank</option>
                                <option>Hatton National Bank (HNB)</option>
                                <option>HSBC</option>
                                <option>Indian Bank</option>
                                <option>Indian Overseas Bank</option>
                                <option>MCB Bank</option>
                                <option>National Development Bank (NDB)</option>
                                <option>National Savings Bank (NSB)</option>
                                <option>Nations Trust Bank (NTB)</option>
                                <option>Pan Asia Banking Corporation</option>
                                <option>People's Bank</option>
                                <option>Public Bank</option>
                                <option>Sampath Bank</option>
                                <option>Seylan Bank</option>
                                <option>Standard Chartered Bank</option>
                                <option>State Bank of India</option>
                                <option>Union Bank of Colombo</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Branch Name*</label>
                        <div className="relative">
                            <select 
                                value={data.branchName}
                                onChange={(e) => updateData({ branchName: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-600 appearance-none"
                            >
                                <option value="" disabled>Select</option>
                                <option>Akarawita</option>
                                <option>Akurana</option>
                                <option>Akuressa</option>
                                <option>Aluthgama</option>
                                <option>Ambalangoda</option>
                                <option>Ambalantota</option>
                                <option>Ampara</option>
                                <option>Anuradhapura</option>
                                <option>Avissawella</option>
                                <option>Badulla</option>
                                <option>Balangoda</option>
                                <option>Bandarawela</option>
                                <option>Battaramulla</option>
                                <option>Batticaloa</option>
                                <option>Beruwala</option>
                                <option>Biyagama</option>
                                <option>Borella</option>
                                <option>Chilaw</option>
                                <option>Colombo 01 - Fort</option>
                                <option>Colombo 02 - Slave Island</option>
                                <option>Colombo 03 - Colpetty</option>
                                <option>Colombo 04 - Bambalapitiya</option>
                                <option>Colombo 05 - Havelock Town</option>
                                <option>Colombo 06 - Wellawatte</option>
                                <option>Colombo 07 - Cinnamon Gardens</option>
                                <option>Colombo 08 - Borella</option>
                                <option>Colombo 09 - Dematagoda</option>
                                <option>Colombo 10 - Maradana</option>
                                <option>Colombo 11 - Pettah</option>
                                <option>Colombo 12 - Hultsdorf</option>
                                <option>Colombo 13 - Kotahena</option>
                                <option>Colombo 14 - Grandpass</option>
                                <option>Colombo 15 - Mutwal</option>
                                <option>Dambulla</option>
                                <option>Dehiwala</option>
                                <option>Embilipitiya</option>
                                <option>Galle</option>
                                <option>Gampaha</option>
                                <option>Gampola</option>
                                <option>Hambantota</option>
                                <option>Haputale</option>
                                <option>Hatton</option>
                                <option>Hikkaduwa</option>
                                <option>Homagama</option>
                                <option>Horana</option>
                                <option>Ja-Ela</option>
                                <option>Jaffna</option>
                                <option>Kadawatha</option>
                                <option>Kaduwela</option>
                                <option>Kalutara</option>
                                <option>Kandy</option>
                                <option>Katunayake</option>
                                <option>Kegalle</option>
                                <option>Kelaniya</option>
                                <option>Kilinochchi</option>
                                <option>Kiribathgoda</option>
                                <option>Kotahena</option>
                                <option>Kottawa</option>
                                <option>Kotte</option>
                                <option>Kurunegala</option>
                                <option>Maharagama</option>
                                <option>Malabe</option>
                                <option>Mannar</option>
                                <option>Matale</option>
                                <option>Matara</option>
                                <option>Minuwangoda</option>
                                <option>Monaragala</option>
                                <option>Moratuwa</option>
                                <option>Mount Lavinia</option>
                                <option>Mullaitivu</option>
                                <option>Nawala</option>
                                <option>Negombo</option>
                                <option>Nugegoda</option>
                                <option>Nuwara Eliya</option>
                                <option>Panadura</option>
                                <option>Pannipitiya</option>
                                <option>Peliyagoda</option>
                                <option>Piliyandala</option>
                                <option>Polonnaruwa</option>
                                <option>Puttalam</option>
                                <option>Rajagiriya</option>
                                <option>Ratmalana</option>
                                <option>Ratnapura</option>
                                <option>Tangalle</option>
                                <option>Thalawathugoda</option>
                                <option>Trincomalee</option>
                                <option>Vavuniya</option>
                                <option>Wattala</option>
                                <option>Wellawatte</option>
                                <option>Wennappuwa</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                        </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700">Soft Copy of the Bank Statement Or Passbook*</label>
                        <div className="max-w-md">
                            <FileUploadInput
                                value={data.bankStatement}
                                onFileSelect={(fileName) => updateData({ bankStatement: fileName })}
                            />
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
