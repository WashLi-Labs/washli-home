"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "@/components/nav-links";
import { Button } from "@/components/ui/button";

interface FieldState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FieldState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [fields, setFields] = useState<FieldState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FieldState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
    };

  const validEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) return;
    if (!validEmail(fields.email)) return;
    setSubmitting(true);
    // Simulate network request. Replace with real API endpoint later.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSent(true);
    setFields(initialState);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image + blur layer */}
      <div
        className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center blur-[10px]"
        aria-hidden
      />
      {/* Light overlay to soften */}
      <div className="absolute inset-0 bg-white/30" aria-hidden />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-3xl font-bold">
              Wash<span className="text-sky-500">L</span>i
            </Link>
          </div>
          <NavLinks />
          {/* Spacer to preserve navbar alignment after removing the CTA */}
          <div className="min-w-[120px] md:min-w-[140px]" aria-hidden="true" />
        </nav>

        {/* UPDATED: Changed py-12 md:py-16 to py-10 md:py-14 to match About Page exactly */}
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          {/* Main Grid: 2 Columns */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-40 items-start">
            {/* LEFT COLUMN: Text + Icons */}
            {/* UPDATED: Removed pt-2 here so it starts at the very top */}
            <div className="flex flex-col h-full">
              <div className="mb-10">
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 text-black">
                  Contact Us
                </h1>
                <p className="max-w-md text-base md:text-lg text-neutral-600 leading-relaxed">
                  Have questions? We&apos;d love to hear from you. Send us a
                  message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              {/* Contact Icons Section */}
              <div className="space-y-5">
                <ContactItem
                  icon={<EmailIcon />}
                  title="Email"
                  lines={["support@washli.com", "info@washli.com"]}
                />
                <ContactItem
                  icon={<PhoneIcon />}
                  title="Phone"
                  lines={["+94 112288855", "Mon-Fri, 9am-6pm EST"]}
                />
                <ContactItem
                  icon={<OfficeIcon />}
                  title="Office"
                  lines={["10 Trelawney Place", "Colombo - 04"]}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="relative w-full">
              <div className="rounded-3xl bg-white/550 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                  Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    label="Your Name"
                    value={fields.name}
                    onChange={update("name")}
                    required
                  />
                  <Input
                    type="email"
                    label="Your Email"
                    value={fields.email}
                    onChange={update("email")}
                    required
                    invalid={fields.email !== "" && !validEmail(fields.email)}
                  />
                  <Input
                    label="Subject"
                    value={fields.subject}
                    onChange={update("subject")}
                  />
                  <TextArea
                    label="Your Message"
                    value={fields.message}
                    onChange={update("message")}
                    required
                    rows={4}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting
                      ? "Sending..."
                      : sent
                      ? "Message Sent"
                      : "Send Message"}
                  </button>
                  {sent && (
                    <p className="text-sm text-green-600 text-center">
                      Thank you! We received your message.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

function ContactItem({ icon, title, lines }: ContactItemProps) {
  return (
    <div className="flex items-start gap-5">
      <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-sky-100 text-sky-500 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1 text-lg">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-neutral-600 leading-relaxed">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid?: boolean;
}
function Input({ label, invalid, ...rest }: InputProps) {
  return (
    <div className="space-y-1">
      <input
        aria-label={label}
        placeholder={label}
        {...rest}
        className={`w-full rounded-lg bg-white/70 px-4 py-3 text-sm outline-none ring-1 ring-transparent focus:ring-sky-400 transition ${
          invalid ? "border border-red-400" : "border border-white/40"
        }`}
      />
      {invalid && <p className="text-xs text-red-500">Enter a valid email.</p>}
    </div>
  );
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
function TextArea({ label, ...rest }: TextAreaProps) {
  return (
    <textarea
      aria-label={label}
      placeholder={label}
      {...rest}
      className="w-full rounded-lg bg-white/70 px-4 py-3 text-sm outline-none border border-white/40 ring-1 ring-transparent focus:ring-sky-400 transition"
    />
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.36-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M6 21V7h8v14" />
      <path d="M14 14h4v7" />
      <path d="M10 11h.01" />
      <path d="M10 15h.01" />
      <path d="M10 18h.01" />
    </svg>
  );
}