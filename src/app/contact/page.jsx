"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const infoCards = [
  { icon: "📞", title: "Call Us", sub: "Mon–Sat, 9am–9pm", link: { href: "tel:+8801700000000", label: "+880 1700-000000" }, bg: "#EDE9FE" },
  { icon: "📧", title: "Email Us", sub: "We reply within 24 hours", link: { href: "mailto:support@trustcare.xyz", label: "support@trustcare.xyz" }, bg: "#DCFCE7" },
  { icon: "📍", title: "Office", sub: "House 12, Road 5\nGulshan-1, Dhaka 1212", bg: "#FFF7ED" },
  { icon: "💬", title: "Live Chat", sub: "Available on website", link: { href: "#", label: "Start a chat →" }, bg: "#F0FDF4" },
];

const faqs = [
  { q: "How do I book a caregiver?", a: "Create an account, browse our services, select your preferred care type, choose duration and location, and confirm. It takes less than 3 minutes!" },
  { q: "Are caregivers background verified?", a: "Yes. Every caregiver submits their NID, references, and completes a care quality assessment before joining TrustCare." },
  { q: "Can I cancel a booking?", a: "Yes, you can cancel any Pending booking from your My Bookings page. Cancellations on Confirmed bookings follow our refund policy." },
  { q: "How is pricing calculated?", a: "Total cost = Service hourly/daily rate × Duration. The total is shown transparently before you confirm — no hidden fees." },
  { q: "Which areas do you serve?", a: "We serve all 64 districts of Bangladesh. Filter caregivers by Division, District, City, and Area during booking." },
];

const SUBJECTS = ["Booking Help", "Caregiver Issue", "Payment", "General Query"];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: "1px solid #E5E7EB", padding: "1rem 0", cursor: "pointer" }} onClick={() => setOpen(open === i ? -1 : i)}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: "0.9rem" }}>
            <span>{faq.q}</span>
            <span style={{ color: "#8B5CF6", fontSize: "1.3rem", display: "inline-block", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s" }}>+</span>
          </div>
          {open === i && (
            <p style={{ fontSize: "0.85rem", color: "#9CA3AF", marginTop: "0.6rem", lineHeight: 1.65 }}>{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [subject, setSubject] = useState("Booking Help");
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const inputStyle = {
    width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #E5E7EB", borderRadius: "0.75rem",
    fontFamily: "inherit", fontSize: "0.9rem", color: "#111827", outline: "none",
    background: "#F9FAFB", transition: "border-color .2s, box-shadow .2s",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <>
      <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,.06)" }}>
        <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.5rem" }}>✉️ Send us a message</h3>

        <form onSubmit={handleSubmit}>
          {/* Name row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
            {[["firstName", "First Name", "Rahim"], ["lastName", "Last Name", "Islam"]].map(([key, label, ph]) => (
              <div key={key}>
                <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "0.4rem" }}>{label}</label>
                <input value={form[key]} onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
                  placeholder={ph} required style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "#8B5CF6"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,.1)"; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; e.target.style.background = "#F9FAFB"; }} />
              </div>
            ))}
          </div>

          {/* Email */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "0.4rem" }}>Email Address</label>
            <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              placeholder="you@example.com" required style={inputStyle}
              onFocus={e => { e.target.style.borderColor = "#8B5CF6"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,.1)"; e.target.style.background = "#fff"; }}
              onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; e.target.style.background = "#F9FAFB"; }} />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "0.4rem" }}>Phone Number</label>
            <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
              placeholder="+880 1700-000000" style={inputStyle}
              onFocus={e => { e.target.style.borderColor = "#8B5CF6"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,.1)"; e.target.style.background = "#fff"; }}
              onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; e.target.style.background = "#F9FAFB"; }} />
          </div>

          {/* Subject chips */}
          <div style={{ marginBottom: "1.2rem" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "0.6rem" }}>Subject</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SUBJECTS.map(s => (
                <button type="button" key={s} onClick={() => setSubject(s)}
                  style={{ padding: "0.4rem 1rem", borderRadius: 999, border: `1.5px solid ${subject === s ? "#8B5CF6" : "#E5E7EB"}`, background: subject === s ? "#8B5CF6" : "#fff", color: subject === s ? "#fff" : "#374151", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", transition: "all .2s" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "0.4rem" }}>Your Message</label>
            <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              placeholder="Tell us how we can help you..." required rows={5}
              style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
              onFocus={e => { e.target.style.borderColor = "#8B5CF6"; e.target.style.boxShadow = "0 0 0 3px rgba(139,92,246,.1)"; e.target.style.background = "#fff"; }}
              onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; e.target.style.background = "#F9FAFB"; }} />
          </div>

          <button type="submit"
            style={{ width: "100%", padding: "0.9rem", background: "#8B5CF6", color: "#fff", border: "none", borderRadius: "0.8rem", fontSize: "1rem", fontWeight: 700, fontFamily: "'Sora', sans-serif", cursor: "pointer", boxShadow: "0 4px 15px rgba(139,92,246,.3)", transition: "background .2s, transform .15s" }}
            onMouseEnter={e => { e.target.style.background = "#7C3AED"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = "#8B5CF6"; e.target.style.transform = "translateY(0)"; }}>
            Send Message →
          </button>

          <p style={{ fontSize: "0.78rem", color: "#9CA3AF", textAlign: "center", marginTop: "0.75rem" }}>
            🔒 Your information is private and secure. We never share your data.
          </p>
        </form>
      </div>

      {/* Toast */}
      <div style={{
        position: "fixed", bottom: "2rem", right: "2rem", background: "#22C55E", color: "#fff",
        padding: "1rem 1.5rem", borderRadius: "1rem", fontWeight: 700, fontFamily: "'Sora', sans-serif",
        fontSize: "0.9rem", zIndex: 999, boxShadow: "0 8px 25px rgba(34,197,94,.35)",
        transition: "all .4s", transform: toast ? "translateY(0)" : "translateY(100px)", opacity: toast ? 1 : 0,
        pointerEvents: toast ? "auto" : "none",
      }}>
        ✅ Message sent! We&apos;ll reply within 24 hours.
      </div>
    </>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#111827", background: "#fff", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "5rem 5% 2.5rem", background: "linear-gradient(135deg, #EDE9FE 0%, #fff 55%)", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "#EDE9FE", color: "#8B5CF6", fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 1rem", borderRadius: 999, marginBottom: "1rem" }}>
          📬 Get In Touch
        </span>
        <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800 }}>
          We&apos;re here to <span style={{ color: "#8B5CF6" }}>help you</span>
        </h1>
        <p style={{ color: "#6B7280", marginTop: "1rem", fontSize: "1.05rem", maxWidth: 480, marginInline: "auto", lineHeight: 1.7 }}>
          Have questions about our services? Need help with a booking? Our team is ready to assist you — just reach out.
        </p>
      </section>

      {/* ── INFO CARDS ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem", padding: "3rem 5% 0" }}>
        {infoCards.map(({ icon, title, sub, link, bg }) => (
          <div key={title} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "1.2rem", padding: "1.8rem 1.5rem", textAlign: "center", transition: "transform .2s, box-shadow .2s, border-color .2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(139,92,246,.12)"; e.currentTarget.style.borderColor = "#8B5CF6"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E5E7EB"; }}>
            <div style={{ background: bg, width: 56, height: 56, borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", margin: "0 auto 1rem" }}>{icon}</div>
            <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem" }}>{title}</h4>
            <p style={{ fontSize: "0.85rem", color: "#9CA3AF", lineHeight: 1.6, whiteSpace: "pre-line" }}>{sub}</p>
            {link && <a href={link.href} style={{ color: "#8B5CF6", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", display: "inline-block", marginTop: "0.4rem" }}>{link.label}</a>}
          </div>
        ))}
      </div>

      {/* ── FAQ + FORM ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", padding: "4rem 5%" }}>
        {/* FAQ */}
        <div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.9rem", fontWeight: 800, lineHeight: 1.25 }}>Frequently asked questions</h2>
          <p style={{ color: "#6B7280", marginTop: "1rem", lineHeight: 1.75 }}>
            We&apos;ve answered the most common questions below. Can&apos;t find what you&apos;re looking for? Send us a message.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>Common Questions</h3>
            <FaqAccordion />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </section>

      {/* ── MAP ── */}
      <section style={{ padding: "0 5% 5rem" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.6rem", fontWeight: 800, marginBottom: "1.5rem" }}>Find Our Office</h2>
        <div style={{ background: "linear-gradient(135deg, #EDE9FE, #DCFCE7)", borderRadius: "1.5rem", height: 280, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", border: "2px dashed #DDD6FE" }}>
          <span style={{ fontSize: "3rem" }}>🗺️</span>
          <p style={{ fontWeight: 600, color: "#374151" }}>TrustCare HQ — Gulshan-1, Dhaka</p>
          <span style={{ fontSize: "0.85rem", color: "#9CA3AF" }}>House 12, Road 5, Gulshan Avenue, Dhaka 1212, Bangladesh</span>
        </div>
      </section>

    </div>
  );
}