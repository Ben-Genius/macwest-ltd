"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { GSAPReveal } from "@/components/ui/gsap-reveal";
import { GSAPStaggerText } from "@/components/ui/gsap-stagger-text";

const contactGrid = [
  {
    label: "Call Center",
    lines: ["+233 24 427 0797", "+233 (0) 50 978 8332"],
  },
  {
    label: "Our Location",
    lines: ["Accra, Greater Accra", "Region, Ghana"],
  },
  {
    label: "Email",
    lines: ["info@macwest.com"],
  },
  {
    label: "Social network",
    social: true,
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    /* Wire to /api/contact when backend is ready */
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Editorial info ────────────────────────────── */}
          <div>
            {/* Tag */}
            <GSAPReveal delay={0.05} y={18} duration={0.7}>
              <p className="text-sm italic text-navy-400 mb-6">/ get in touch /</p>
            </GSAPReveal>

            {/* Big heading — word stagger */}
            <GSAPStaggerText
              text="We are always ready to help you and answer your questions"
              delay={0.12}
              duration={0.85}
              stagger={0.04}
              y={40}
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-950 leading-[1.08] tracking-tight mb-6 max-w-2xl"
            />

            {/* Body copy */}
            <GSAPReveal delay={0.22} y={20} duration={0.8}>
              <p className="text-sm text-navy-400 leading-relaxed mb-14 max-w-md">
                From civil infrastructure to MEP and structural engineering —
                certified, precise, and built to international standards.
                Reach out and let&apos;s get started.
              </p>
            </GSAPReveal>

            {/* 2×2 contact grid — each cell staggers in */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8 sm:gap-y-10">
              {contactGrid.map(({ label, lines, social }, i) => (
                <GSAPReveal key={label} delay={0.28 + i * 0.09} y={16} duration={0.75}>
                  <p className="text-sm font-bold text-navy-950 mb-2">{label}</p>
                  {social ? (
                    <div className="flex items-center gap-4 mt-1">
                      {socialLinks.map(({ label: sl, href, svg }) => (
                        <a
                          key={sl}
                          href={href}
                          aria-label={sl}
                          className="text-navy-500 hover:text-navy-950 transition-colors duration-150"
                        >
                          {svg}
                        </a>
                      ))}
                    </div>
                  ) : (
                    lines?.map((line) => (
                      <p key={line} className="text-sm text-navy-500 leading-relaxed">
                        {line}
                      </p>
                    ))
                  )}
                </GSAPReveal>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form card ──────────────────────────────────── */}
          <GSAPReveal delay={0.18} x={50} y={0} duration={1.05} className="h-full">
            <div className="bg-[#F4F4F4] rounded-2xl p-8 sm:p-10">
              <GSAPReveal delay={0.3} y={14} duration={0.7}>
                <h3 className="font-display text-xl font-semibold text-navy-950 mb-1">
                  Get in Touch
                </h3>
                <p className="text-xs text-navy-500 leading-relaxed mb-8">
                  Define your goals and identify areas where we can add value to your project.
                </p>
              </GSAPReveal>

              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
                  <CheckCircle2 className="text-brand-600" size={44} strokeWidth={1.5} />
                  <h4 className="font-display text-lg font-bold text-navy-900">
                    Message received!
                  </h4>
                  <p className="text-navy-500 text-sm max-w-xs">
                    Thank you for reaching out. A member of our team will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ fullName: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-2 text-xs font-semibold text-brand-600 hover:text-brand-700 underline-offset-2 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {(["fullName", "email", "subject"] as const).map((field, i) => (
                    <GSAPReveal key={field} delay={0.38 + i * 0.08} y={12} duration={0.6}>
                      <UnderlineField
                        label={field === "fullName" ? "Full name" : field.charAt(0).toUpperCase() + field.slice(1)}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={field === "fullName" ? "Full name" : field.charAt(0).toUpperCase() + field.slice(1)}
                        value={form[field]}
                        onChange={handleChange}
                        required
                      />
                    </GSAPReveal>
                  ))}

                  <GSAPReveal delay={0.62} y={12} duration={0.6}>
                    <div className="border-b border-navy-200 py-4">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none resize-none"
                      />
                    </div>
                  </GSAPReveal>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-600 pt-2">
                      <AlertCircle size={14} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <GSAPReveal delay={0.7} y={12} duration={0.6}>
                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-[0.97] disabled:opacity-60 text-white text-sm font-semibold tracking-wide transition-all duration-200"
                      >
                        {status === "sending" ? (
                          <>
                            <span className="block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          "Send a message"
                        )}
                      </button>
                    </div>
                  </GSAPReveal>
                </form>
              )}
            </div>
          </GSAPReveal>

        </div>
      </div>
    </section>
  );
}

/* ── Underline-style input ─────────────────────────────────── */

interface UnderlineFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function UnderlineField({ label, name, type = "text", placeholder, value, onChange, required }: UnderlineFieldProps) {
  return (
    <div className="border-b border-navy-200 py-4">
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ?? label}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
        className="w-full bg-transparent text-sm text-navy-900 placeholder:text-navy-400 border-none outline-none focus:outline-none focus:ring-0"
      />
    </div>
  );
}
