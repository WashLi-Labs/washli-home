import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "WashLi",
  description: "WashLi — AI-powered laundry platform connecting you to nearby laundries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body className={`${poppins.className} bg-background text-foreground h-full overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
