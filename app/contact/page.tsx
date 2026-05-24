"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { UNIVERSITIES } from "@/data/universities";

// ============================================================
//   ⚠️ FORMSPREE SETUP — DO THIS FIRST
// ============================================================
// 1. Sign up at https://formspree.io (free tier: 50 submissions/month)
// 2. Create a new form, get your form ID (looks like "xyzabc123")
// 3. Replace YOUR_FORM_ID_HERE below with your actual form ID
//
// All form submissions will arrive in your email inbox automatically.
// ============================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqnlvvz";

function ContactForm() {
  const searchParams = useSearchParams();
  const preSelectedUni = searchParams.get("uni");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "Pakistan",
    educationLevel: "",
    targetUni: preSelectedUni || "",
    targetField: "",
    intake: "September 2026",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Pre-fill university if it comes from URL
  useEffect(() => {
    if (preSelectedUni && !formData.targetUni) {
      setFormData((prev) => ({ ...prev, targetUni: preSelectedUni }));
    }
  }, [preSelectedUni]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Lead: ${formData.name} — ${formData.targetUni || "General"}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          country: "Pakistan",
          educationLevel: "",
          targetUni: "",
          targetField: "",
          intake: "September 2026",
          message: "",
        });
      } else {
        setError("Something went wrong. Please try WhatsApp instead.");
      }
    } catch (err) {
      setError("Network error. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border-2 border-lithGreen shadow-xl">
        <div className="w-20 h-20 bg-lithGreen rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-navy mb-3">
          Message received! 🎉
        </h3>
        <p className="text-ink-soft mb-6 leading-relaxed">
          Thanks for reaching out — we'll be in touch within{" "}
          <span className="font-bold text-navy">24 hours</span> via WhatsApp or
          email. Want a faster response? Hit us up on WhatsApp directly.
        </p>
        <a
          href="https://wa.me/923212919592"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle size={18} /> Open WhatsApp now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-line shadow-sm space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name *" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Ahmed Khan" />
        <Field label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="WhatsApp Number *" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="+92 300 1234567" />
        <SelectField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={["Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal", "Afghanistan", "Other"]}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          label="Current Education Level *"
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
          options={[
            "",
            "FSc / A-Levels (applying for Bachelor's)",
            "Bachelor's Graduate (applying for Master's)",
            "Master's Graduate (applying for PhD)",
            "Currently in University",
            "Other",
          ]}
          placeholder="Select your current level"
        />
        <SelectField
          label="Preferred Intake"
          name="intake"
          value={formData.intake}
          onChange={handleChange}
          options={["September 2026", "February 2027", "September 2027", "Not sure yet"]}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          label="Target University (optional)"
          name="targetUni"
          value={formData.targetUni}
          onChange={handleChange}
          placeholder="Any / Not sure"
          options={["", ...UNIVERSITIES.map((u) => u.slug)]}
          labels={["Any / Not sure", ...UNIVERSITIES.map((u) => u.name)]}
        />
        <Field
          label="Field of Interest"
          name="targetField"
          value={formData.targetField}
          onChange={handleChange}
          placeholder="e.g. Computer Science, Business"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
          Tell us more (optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Anything specific you'd like us to know — grades, language scores, budget, deadline concerns..."
          className="w-full px-4 py-3 rounded-xl border border-line bg-cream focus:outline-none focus:border-navy focus:bg-white transition-colors text-sm resize-none"
        />
      </div>

      {error && (
        <div className="bg-lithRed/10 border border-lithRed text-lithRed text-sm rounded-xl p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Send Enquiry
          </>
        )}
      </button>

      <p className="text-xs text-muted">
        We respect your privacy. Your info is only used to respond to your
        enquiry — never sold or shared. Replies usually within 24 hours.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kicker text-gold mb-3">Get in touch</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Let's talk about your <span className="text-gold">future</span>.
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-lg text-white/80 mt-6 max-w-2xl">
            Fill the form, hit us on WhatsApp, or send an email. Whatever's
            easiest. Usual response time: under 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-navy mb-2">
                Send us a detailed enquiry
              </h2>
              <p className="text-ink-soft mb-6">
                The more you tell us, the better we can tailor our response.
              </p>
              <Suspense
                fallback={
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <Loader2 className="animate-spin mx-auto text-navy" />
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Side */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <h3 className="font-black text-navy mb-4">Other ways</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/923212919592?text=Hi%20Nexus%20EU%21%20I%27d%20like%20to%20discuss%20studying%20in%20Lithuania."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle size={20} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-navy text-sm">WhatsApp</div>
                      <div className="text-xs text-ink-soft">+92 321 2919592</div>
                      <div className="text-[10px] text-lithGreen mt-1">⚡ Fastest reply</div>
                    </div>
                  </a>
                  <a
                    href="mailto:hello@nexus-eu.com"
                    className="flex items-start gap-3 p-3 bg-cream rounded-xl hover:bg-gold-soft transition-colors"
                  >
                    <Mail size={20} className="text-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-navy text-sm">Email</div>
                      <div className="text-xs text-ink-soft">hello@nexus-eu.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-3 bg-cream rounded-xl">
                    <MapPin size={20} className="text-navy flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-navy text-sm">Location</div>
                      <div className="text-xs text-ink-soft">Pakistan-based · Serving applicants globally</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ teaser */}
              <div className="bg-navy-dark rounded-2xl p-6 text-white">
                <h3 className="font-black mb-2">Quick answers</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>✓ Free initial consultation</li>
                  <li>✓ No hidden fees</li>
                  <li>✓ South Asian-focused</li>
                  <li>✓ Reply within 24 hours</li>
                  <li>✓ WhatsApp-friendly</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------- Form field helpers --------------------
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-line bg-cream focus:outline-none focus:border-navy focus:bg-white transition-colors text-sm"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  labels,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  labels?: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-line bg-cream focus:outline-none focus:border-navy focus:bg-white transition-colors text-sm appearance-none cursor-pointer"
      >
        {options.map((opt, i) => (
          <option key={opt + i} value={opt}>
            {opt === "" ? placeholder ?? "Select..." : labels ? labels[i] : opt}
          </option>
        ))}
      </select>
    </div>
  );
}
