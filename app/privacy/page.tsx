import React from "react";
import PageLayout from "@/components/page-layout";

export default function PrivacyPage() {
  return (
    <PageLayout allowScroll={true} showFooter={true}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-slate-800">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-8 leading-relaxed">
          At Laundry App, we are committed to protecting the privacy and security of our customers&apos; personal information. 
          This Privacy Policy outlines how we collect, use, and safeguard your data when you use our mobile app for laundry services, 
          including pickups, deliveries, and AI features like fabric advice. By using the app, you consent to these practices.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Information We Collect</h2>
          <p className="mb-4">
            We gather personal details you provide, such as name, email, phone number, address, payment info, and laundry preferences 
            during registration, order placement, or image uploads for AI analysis. Usage data includes location for nearest providers, 
            device info, transaction history, and behavior patterns for predictions and reminders.
          </p>
          <p className="mb-4">
            Automatically collected info covers IP address, device type, app interactions, and precise location during pickups/deliveries, 
            similar to on-demand services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Use of Information</h2>
          <p className="mb-4">
            Your data helps process orders, match with laundry providers, optimize routes, predict delivery times, send reminders, 
            and personalize features like loyalty rewards or split laundry costs. We also use it for fraud prevention, service improvements, 
            and communications about promotions.
          </p>
          <p className="mb-4 italic text-slate-600">
            AI models analyze past data and images for fabric guidance without storing sensitive visuals long-term.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Information Sharing</h2>
          <p className="mb-4">
            We share minimal data with laundry providers and riders (e.g., pickup address, order details) to fulfill services, 
            and with payment processors securely. No selling of data; sharing occurs only with consent, service partners bound by 
            confidentiality, or legal requirements.
          </p>
          <p className="mb-4">
            Data may be stored in Sri Lanka or secure locations with protective measures.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Data Security</h2>
          <p className="mb-4">
            Industry-standard encryption and measures protect against unauthorized access, though no system is fully risk-free. 
            Location and contacts access requires your permission via device settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Your Choices</h2>
          <p className="mb-4">
            Update or delete account info via app settings; opt out of promotions. Disabling location/cookies limits features.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Changes to Policy</h2>
          <p className="mb-4">
            Updates posted in-app with notice; continued use implies consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Contact Us</h2>
          <p className="mb-4">
            Contact <a href="mailto:support@laundryapp.lk" className="text-sky-500 hover:underline">support@laundryapp.lk</a> for questions.
          </p>
          <p className="text-sm text-slate-500 mt-4 italic">
            (Note: General guideline; consult legal for Sri Lanka compliance.)
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            &copy; 2026 WashLi / Laundry App. All rights reserved.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
