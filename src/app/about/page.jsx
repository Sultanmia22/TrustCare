const metrics = [
  { icon: "👶", value: "2,400+", label: "Happy Families Served", bg: "#EDE9FE" },
  { icon: "💚", value: "850+", label: "Certified Caregivers", bg: "#DCFCE7" },
  { icon: "⭐", value: "4.9 / 5", label: "Average Rating", bg: "#FFF7ED" },
];

const stats = [
  { num: "64", label: "Districts Covered" },
  { num: "3", label: "Core Services" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "24/7", label: "Support Available" },
];

const values = [
  { title: "Background-Verified Caregivers", desc: "Every caregiver submits their NID, references, and completes a care quality assessment before joining." },
  { title: "Transparent Pricing", desc: "No hidden costs. Know exactly what you pay before confirming any booking." },
  { title: "Real-Time Booking Tracking", desc: "Track status from Pending to Confirmed to Completed — always in the loop." },
];

const serviceCards = [
  { icon: "👶", title: "Baby Care", desc: "Expert newborn & toddler care" },
  { icon: "🧓", title: "Elderly Care", desc: "Compassionate senior support" },
  { icon: "🏥", title: "Sick Care", desc: "Home nursing & recovery aid" },
  { icon: "📍", title: "Location-Based Matching", desc: "Find by division, district, city & area", wide: true },
];

const team = [
  { emoji: "👨‍💼", name: "Rahimul Islam", role: "CEO & Co-Founder", bio: "Former healthcare consultant with 10+ years building social impact tech.", bg: "#EDE9FE" },
  { emoji: "👩‍⚕️", name: "Fatema Begum", role: "Head of Care Quality", bio: "Trained nurse ensuring every caregiver meets our rigorous standards.", bg: "#DCFCE7" },
  { emoji: "👨‍💻", name: "Nayeem Hossain", role: "Lead Engineer", bio: "Full-stack developer crafting seamless booking and matching systems.", bg: "#FFF7ED" },
  { emoji: "👩‍🎨", name: "Sadia Rahman", role: "UX / Product Design", bio: "Designing accessible, warm interfaces that families love using.", bg: "#FDF4FF" },
];

const whyCards = [
  { icon: "🔒", title: "Safe & Secure", desc: "NID-verified caregivers, encrypted user data, and secure booking flows." },
  { icon: "⚡", title: "Fast Booking", desc: "Book a caregiver in under 3 minutes with our streamlined step-by-step flow." },
  { icon: "📱", title: "Works Everywhere", desc: "Fully responsive — desktop, tablet, or mobile, the experience is flawless." },
  { icon: "💬", title: "24/7 Support", desc: "Our care team is always available to assist you with any questions or issues." },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#8B5CF6" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#111827", background: "#fff", overflowX: "hidden" }}>

      {/* HERO */}
      <section style={{ padding: "5rem 5% 4rem", background: "linear-gradient(135deg, #EDE9FE 0%, #fff 60%)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <span style={{ display: "inline-block", background: "#EDE9FE", color: "#8B5CF6", fontSize: "0.8rem", fontWeight: 700, padding: "0.35rem 1rem", borderRadius: 999, marginBottom: "1rem" }}>
            🌟 About TrustCare
          </span>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15 }}>
            We&apos;re on a mission to make care{" "}
            <span style={{ color: "#8B5CF6" }}>accessible</span> for all
          </h1>
          <p style={{ marginTop: "1.2rem", color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.75 }}>
            TrustCare was founded with a simple belief — every person deserves compassionate, dignified care. Whether it&apos;s a newborn, an aging parent, or someone recovering at home, we connect families with trained, trusted caregivers.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", top: "-1rem", right: "-1rem", background: "#22C55E", color: "#fff", fontSize: "0.8rem", fontWeight: 700, padding: "0.5rem 1rem", borderRadius: 999, zIndex: 10, boxShadow: "0 4px 15px rgba(34,197,94,.3)" }}>
            ✓ Verified Platform
          </span>
          <div style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 20px 60px rgba(139,92,246,.15)" }}>
            {metrics.map(({ icon, value, label, bg }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: bg, width: 52, height: 52, borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "1.6rem", fontWeight: 800 }}>{value}</div>
                  <div style={{ fontSize: "0.8rem", color: "#9CA3AF", fontWeight: 500 }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: "#8B5CF6", padding: "1.8rem 5%", display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center" }}>
        {stats.map(({ num, label }) => (
          <div key={label} style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "2rem", fontWeight: 800 }}>{num}</div>
            <div style={{ fontSize: "0.8rem", opacity: 0.8, marginTop: "0.2rem" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* MISSION */}
      <section style={{ padding: "5rem 5%", background: "#F9FAFB", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B5CF6", marginBottom: "0.75rem" }}>Our Mission &amp; Values</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.2 }}>Caregiving built on<br />trust and dignity</h2>
          <p style={{ color: "#6B7280", lineHeight: 1.8, marginTop: "1rem" }}>
            We believe quality care shouldn&apos;t be a luxury. Our platform removes barriers — connecting skilled caregivers with families across Bangladesh.
          </p>
          <ul style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.2rem", listStyle: "none", padding: 0 }}>
            {values.map(({ title, desc }) => (
              <li key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ marginTop: 3, width: 28, height: 28, background: "#EDE9FE", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckIcon />
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#9CA3AF" }}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {serviceCards.map(({ icon, title, desc, wide }) => (
            <div key={title} style={{ gridColumn: wide ? "1 / -1" : "auto", background: "#fff", borderRadius: "1.2rem", padding: "1.5rem", boxShadow: "0 4px 20px rgba(0,0,0,.06)", textAlign: "center", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>{title}</h4>
              <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "0.3rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "5rem 5%", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B5CF6", marginBottom: "0.75rem" }}>Meet the Team</p>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "2.2rem", fontWeight: 800 }}>The people behind TrustCare</h2>
        <p style={{ color: "#6B7280", marginTop: "0.75rem", maxWidth: 480, marginInline: "auto", lineHeight: 1.7 }}>
          A passionate team dedicated to reshaping caregiving in Bangladesh.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
          {team.map(({ emoji, name, role, bio, bg }) => (
            <div key={name} style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "1.5rem", padding: "2rem 1.5rem" }}>
              <div style={{ background: bg, width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.2rem", margin: "0 auto 1rem" }}>{emoji}</div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{name}</h4>
              <p style={{ color: "#8B5CF6", fontSize: "0.82rem", fontWeight: 600, marginTop: "0.25rem" }}>{role}</p>
              <p style={{ color: "#9CA3AF", fontSize: "0.82rem", marginTop: "0.5rem", lineHeight: 1.5 }}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: "5rem 5%", background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A5B4FC", textAlign: "center", marginBottom: "0.75rem" }}>Why TrustCare</p>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: "#fff", textAlign: "center" }}>Designed for peace of mind</h2>
        <p style={{ color: "#C7D2FE", textAlign: "center", marginTop: "0.75rem", maxWidth: 500, marginInline: "auto", lineHeight: 1.7 }}>
          Everything we build is focused on one thing — making caregiving safe, easy, and trustworthy.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
          {whyCards.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "1.2rem", padding: "1.8rem" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{icon}</div>
              <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.5rem" }}>{title}</h4>
              <p style={{ color: "#C7D2FE", fontSize: "0.87rem", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}