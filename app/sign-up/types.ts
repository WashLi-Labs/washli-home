export interface OperatingHour {
    day: string;
    isOpen: boolean; // Note: In UI it says "Close" checkbox, so isOpen = !isClosed
    openTime: string;
    closeTime: string;
}

export interface ApiError {
    type: string;
    loc: (string | number)[];
    msg: string;
    input: any;
    ctx?: any;
    url?: string;
}

export type FormErrors = { [K in keyof SignUpFormData]?: string } & { [key: string]: string };

export interface SignUpFormData {
    // Step 1: Merchant Signup
    email: string;
    howDidYouHear: string;
    merchantType: string;
    outletName: string;
    outletAddress: string;
    city: string;
    phoneNumber: string;
    location: { lat: number; lng: number } | null;
    isEmailVerified: boolean;

    // Step 2: Contact Info
    ownerName: string;
    ownerPhone: string;
    ownerEmail: string;
    managerName: string;
    managerPhone: string;
    managerEmail: string;
    operatingHours: OperatingHour[];

    // Step 3: Business Info
    businessRegistered: boolean;
    parentName: string;
    brNumber: string;
    brPhoneNumber: string;
    brDocument: string; // File path/name or placeholder
    brDocumentName: string;
    taxRegistered: boolean;
    tinNumber: string;
    taxCertificate: string;
    taxCertificateName: string;
    tdlDocument: string;
    tdlDocumentName: string;
    vatRegistered: boolean;
    vatNumber: string;
    nicFront: string;
    nicFrontName: string;
    nicBack: string;
    nicBackName: string;

    // Step 4: Menu Info
    menuDocument: string;
    menuDocumentName: string;
    outletLogo: string;
    outletLogoName: string;
    hasImages: "Yes" | "No"; // "Yes" | "No"
    itemImages: string;
    itemImagesName: string;

    // Step 5: Bank Details
    beneficiaryName: string;
    accountHolderPhone: string;
    accountNumber: string;
    bankName: string;
    branchName: string;
    branchCode: string;
    bankStatement: string;
    bankStatementName: string;
}

export const initialOperatingHours: OperatingHour[] = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
].map(day => ({
    day,
    isOpen: true,
    openTime: "05:30",
    closeTime: "17:30"
}));

export const initialFormData: SignUpFormData = {
    // Step 1
    email: "",
    howDidYouHear: "",
    merchantType: "",
    outletName: "",
    outletAddress: "",
    city: "",
    phoneNumber: "",
    location: null,
    isEmailVerified: false,

    // Step 2
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    managerName: "",
    managerPhone: "",
    managerEmail: "",
    operatingHours: initialOperatingHours,

    // Step 3
    businessRegistered: false,
    parentName: "",
    brNumber: "",
    brPhoneNumber: "",
    brDocument: "",
    brDocumentName: "",
    taxRegistered: false,
    tinNumber: "",
    taxCertificate: "",
    taxCertificateName: "",
    tdlDocument: "",
    tdlDocumentName: "",
    vatRegistered: false,
    vatNumber: "",
    nicFront: "",
    nicFrontName: "",
    nicBack: "",
    nicBackName: "",

    // Step 4
    menuDocument: "",
    menuDocumentName: "",
    outletLogo: "",
    outletLogoName: "",
    hasImages: "No",
    itemImages: "",
    itemImagesName: "",

    // Step 5
    beneficiaryName: "",
    accountHolderPhone: "",
    accountNumber: "",
    bankName: "",
    branchName: "",
    branchCode: "",
    bankStatement: "",
    bankStatementName: "",
};
