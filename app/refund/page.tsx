import React from "react";
import PageLayout from "@/components/page-layout";

export default function RefundPage() {
  return (
    <PageLayout allowScroll={true} showFooter={true}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-slate-800">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <p className="mb-8 leading-relaxed">
            Thank you for using Laundry App. We aim for satisfaction with every order.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Returns and Refunds</h2>
          <p className="mb-4">
            Request refunds within 48 hours of delivery for defects/damages. Items must be unused post-delivery 
            where applicable. Processed to original payment minus pickup/delivery fees.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Non-Refundable</h2>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Completed services</li>
            <li>No-shows</li>
            <li>Post-pickup cancellations</li>
            <li>Loyalty points</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Damaged Items</h2>
          <p className="mb-4 font-medium">
            Notify immediately with photos; replacement or refund if available.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Processing</h2>
          <p className="mb-4">
            Refunds within 5-7 business days; bank delays extra.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-sky-600">Contact Support</h2>
          <p className="mb-4">
            Contact <a href="mailto:support@laundryapp.lk" className="text-sky-500 hover:underline">support@laundryapp.lk</a> for issues.
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
