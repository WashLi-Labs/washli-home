export interface OperatingHour {
    day: string;
    isOpen: boolean; // Note: In UI it says "Close" checkbox, so isOpen = !isClosed
    openTime: string;
    closeTime: string;
}

export interface SignUpFormData {
    // Step 1: Merchant Signup
    email: string;
    howDidYouHear: string;
    region: string;
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
    brDocument: string; // File path/name or placeholder
    taxRegistered: boolean;
    tinNumber: string;
    taxCertificate: string;
    tdlDocument: string;
    vatRegistered: boolean;
    vatNumber: string;
    nicFront: string;
    nicBack: string;

    // Step 4: Menu Info
    menuDocument: string;
    outletLogo: string;
    hasImages: string; // "Yes" | "No"
    itemImages: string;

    // Step 5: Bank Details
    beneficiaryName: string;
    accountNumber: string;
    bankName: string;
    branchName: string;
    branchCode: string;
    bankStatement: string;
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
    region: "",
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
    brDocument: "",
    taxRegistered: false,
    tinNumber: "",
    taxCertificate: "",
    tdlDocument: "",
    vatRegistered: false,
    vatNumber: "",
    nicFront: "",
    nicBack: "",

    // Step 4
    menuDocument: "",
    outletLogo: "",
    hasImages: "No",
    itemImages: "",

    // Step 5
    beneficiaryName: "",
    accountNumber: "",
    bankName: "",
    branchName: "",
    branchCode: "",
    bankStatement: "",
};
