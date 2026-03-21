import React from "react";
import PageLayout from "@/components/page-layout";

export default function TermsPage() {
  return (
    <PageLayout allowScroll={true} showFooter={true}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-slate-800">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <section className="mb-10">
          <p className="mb-4 italic">
            Welcome to Laundry App. These terms govern your use of our app for laundry services. 
            By accessing or using it, you agree to these terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Use of the App</h2>
          <p className="mb-4">
            You must be 18+ years old. Maintain account security; provide accurate info. 
            No unlawful use or interference.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Services and Orders</h2>
          <p className="mb-4">
            App connects users to providers for pickups, washing, delivery. Place orders instantly; 
            AI suggests times/routes. Providers handle actual service; we facilitate matching.
          </p>
          <p className="mb-4 font-medium text-slate-700">
            Pickup within 24-48 hours typical; delays possible due to demand.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Payments</h2>
          <p className="mb-4">
            Secure third-party processors; authorize charges including fees/taxes. 
            No storage of full card details.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Laundry Handling</h2>
          <p className="mb-4">
            Providers use care; not liable for pre-existing damage, shrinkage, or items in pockets. 
            Claim issues within 24 hours of delivery.
          </p>
          <p className="mb-4 text-red-600 font-medium">
            Non-returnable: perishable items, custom advice.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Cancellations and Refunds</h2>
          <p className="mb-4">
            Cancel before pickup confirmation; fees apply post-pickup. Refunds processed within 7 days 
            if service unsatisfactory, minus fees. Refer detailed <a href="/refund" className="text-sky-500 hover:underline">Refund Policy</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Liability</h2>
          <p className="mb-4">
            We disclaim liability for provider actions, item damage/loss (limited to order value), 
            or indirect damages. Force majeure applies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Intellectual Property</h2>
          <p className="mb-4">
            App content protected; no unauthorized use.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Termination</h2>
          <p className="mb-4">
            We may suspend accounts for violations. Review terms periodically.
          </p>
          <p className="text-sm text-slate-500 mt-4 italic">
            (Note: General guideline; customize and get legal review for Sri Lanka.)
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
