"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLang } from "@/lib/i18n";
import { HOME, PHONE, PHONE_HREF, EMAIL } from "@/lib/content";
import { ORDER, categoryCard } from "@/lib/categories";

const eyebrow = (color: string): React.CSSProperties => ({
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 2,
  textTransform: "uppercase",
  color,
  marginBottom: 16,
});

export default function HomePage() {
  const { lang } = useLang();
  const t = HOME[lang];
  const cards = ORDER.map((slug) => categoryCard(slug, lang));

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="home" style={{ background: "#f5f3ec" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "84px clamp(20px,5vw,36px) 0" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "7px 15px",
              border: "1px solid #cdd6cd",
              background: "#fff",
              borderRadius: 100,
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: "#3f6b54",
              marginBottom: 30,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#3f7d5c", display: "inline-block" }} />
            {t.hero.loc}
          </div>
          <h1
            className="serif h1-hero"
            style={{
              fontWeight: 600,
              fontSize: 58,
              lineHeight: 1.06,
              letterSpacing: -0.8,
              color: "#16241c",
              maxWidth: 920,
              marginBottom: 26,
              textWrap: "balance",
            }}
          >
            {t.hero.title}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: "#4b574f", maxWidth: 680, marginBottom: 36, textWrap: "pretty" }}>
            {t.hero.sub}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 56 }}>
            <a href="#contact" className="btn-dark" style={{ background: "#1f3a2e", color: "#fff", fontSize: 15, fontWeight: 600, padding: "15px 28px", borderRadius: 10 }}>
              {t.hero.cta1}
            </a>
            <a href="#categories" className="btn-light" style={{ background: "#fff", color: "#1f3a2e", border: "1px solid #d3cdbf", fontSize: 15, fontWeight: 600, padding: "15px 28px", borderRadius: 10 }}>
              {t.hero.cta2}
            </a>
          </div>
        </div>
        {/* trust strip */}
        <div style={{ borderTop: "1px solid #e1dccf", borderBottom: "1px solid #e1dccf", background: "#efece3" }}>
          <div className="grid-3" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
            {[t.hero.b1, t.hero.b2, t.hero.b3].map((b, i) => (
              <div
                key={i}
                style={{
                  padding: i === 0 ? "24px 28px 24px 0" : i === 2 ? "24px 0 24px 28px" : "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  borderRight: i < 2 ? "1px solid #e1dccf" : undefined,
                }}
              >
                <span style={{ width: 32, height: 32, borderRadius: 8, background: "#e3ede5", color: "#1f8a5b", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flex: "none" }}>&#10003;</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#283831" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BAND */}
      <section
        className="img-band"
        style={{
          position: "relative",
          height: 440,
          background: "#16241c url('https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1700&q=80') center/cover",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(15,26,20,0.82) 0%,rgba(15,26,20,0.35) 55%,rgba(15,26,20,0.15) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)", height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 540 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2.2, textTransform: "uppercase", color: "#8fc4a7", marginBottom: 16 }}>{t.band.eyebrow}</div>
            <p className="serif h2-band" style={{ fontWeight: 500, fontSize: 28, lineHeight: 1.32, color: "#f4f2ea", textWrap: "pretty" }}>{t.band.caption}</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 0", background: "#f5f3ec" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)", textAlign: "center" }}>
          <div style={eyebrow("#3f7d5c")}>{t.about.eyebrow}</div>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: 40, lineHeight: 1.16, letterSpacing: -0.4, color: "#16241c", marginBottom: 26, textWrap: "balance" }}>{t.about.title}</h2>
          <p style={{ fontSize: 17.5, color: "#4b574f", maxWidth: 780, margin: "0 auto 18px", textWrap: "pretty" }}>{t.about.p1}</p>
          <p style={{ fontSize: 17.5, color: "#4b574f", maxWidth: 780, margin: "0 auto", textWrap: "pretty" }}>{t.about.p2}</p>
        </div>
        <div className="grid-4" style={{ maxWidth: 1200, margin: "54px auto 0", padding: "0 clamp(20px,5vw,36px)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
          {t.about.facts.map((f) => (
            <div key={f.k} style={{ borderTop: "2px solid #1f3a2e", paddingTop: 18 }}>
              <div className="serif" style={{ fontSize: 15, fontWeight: 600, color: "#3f7d5c", marginBottom: 10 }}>{f.k}</div>
              <div style={{ fontSize: 15, color: "#3a463f", fontWeight: 500, lineHeight: 1.5 }}>{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "96px 0", background: "#16241c" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 30, marginBottom: 48, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 620 }}>
              <div style={eyebrow("#7fb89a")}>{t.services.eyebrow}</div>
              <h2 className="serif" style={{ fontWeight: 600, fontSize: 38, lineHeight: 1.14, letterSpacing: -0.3, color: "#f4f2ea", textWrap: "balance" }}>{t.services.title}</h2>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #2c4133" }}>
            {t.services.items.map((s) => (
              <div key={s.n} className="svc-row" style={{ display: "grid", gridTemplateColumns: "90px 320px 1fr", gap: 28, alignItems: "start", padding: "30px 0", borderBottom: "1px solid #2c4133" }}>
                <div className="serif" style={{ fontSize: 24, fontWeight: 600, color: "#7fb89a" }}>{s.n}</div>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 23, color: "#f4f2ea", lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 15.5, color: "#b3c2b8", lineHeight: 1.65, maxWidth: 560 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" style={{ padding: "100px 0", background: "#f5f3ec" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)" }}>
          <div style={{ maxWidth: 740, marginBottom: 50 }}>
            <div style={eyebrow("#3f7d5c")}>{t.categories.eyebrow}</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 38, lineHeight: 1.15, letterSpacing: -0.3, color: "#16241c", marginBottom: 18, textWrap: "balance" }}>{t.categories.title}</h2>
            <p style={{ fontSize: 17, color: "#4b574f", textWrap: "pretty" }}>{t.categories.intro}</p>
          </div>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {cards.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="cat-card"
                style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #e1dccf", borderRadius: 16, overflow: "hidden", boxShadow: "0 1px 2px rgba(22,36,28,0.04)" }}
              >
                <div style={{ position: "relative", aspectRatio: "5 / 4", background: "#dfdaca", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(15,26,20,0) 38%,rgba(15,26,20,0.78) 100%)" }} />
                  <h3 className="serif" style={{ position: "absolute", left: 20, bottom: 16, right: 20, fontWeight: 600, fontSize: 23, color: "#fff", lineHeight: 1.15 }}>{c.name}</h3>
                </div>
                <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p style={{ fontSize: 14, color: "#4b574f", lineHeight: 1.55, marginBottom: 8 }}>{c.cardDesc}</p>
                  <p style={{ fontSize: 13, color: "#7d8a80", lineHeight: 1.5, marginBottom: 18 }}>{c.cardSub}</p>
                  <span style={{ marginTop: "auto", fontSize: 13.5, fontWeight: 600, color: "#1f3a2e", display: "inline-flex", alignItems: "center", gap: 7 }}>
                    {t.categories.explore} <span style={{ fontSize: 15 }}>&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "100px 0", background: "#efece3", borderTop: "1px solid #e1dccf", borderBottom: "1px solid #e1dccf" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)" }}>
          <div style={{ maxWidth: 700, marginBottom: 60 }}>
            <div style={eyebrow("#3f7d5c")}>{t.process.eyebrow}</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 38, lineHeight: 1.15, letterSpacing: -0.3, color: "#16241c", textWrap: "balance" }}>{t.process.title}</h2>
          </div>
          <div className="grid-process" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 30 }}>
            <div className="proc-line" style={{ position: "absolute", top: 23, left: "6%", right: "6%", height: 2, background: "#d4cfc1" }} />
            {t.process.items.map((p) => (
              <div key={p.n} style={{ position: "relative" }}>
                <div className="serif" style={{ width: 48, height: 48, borderRadius: "50%", background: "#1f3a2e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 600, marginBottom: 24, position: "relative", zIndex: 1, boxShadow: "0 0 0 6px #efece3" }}>{p.n}</div>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 21, color: "#16241c", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, color: "#4b574f", lineHeight: 1.6, maxWidth: 240 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "66px 0", background: "#1f3a2e" }}>
        <div className="grid-stats" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {t.stats.map((st, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 14px" }}>
              <div className="serif" style={{ fontSize: 34, fontWeight: 600, color: "#fff", lineHeight: 1.05, marginBottom: 8 }}>{st.v}</div>
              <div style={{ fontSize: 13.5, color: "#a9bcb0", fontWeight: 500, lineHeight: 1.45, maxWidth: 200, margin: "0 auto" }}>{st.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 0", background: "#f5f3ec" }}>
        <div className="contact-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,36px)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 32, alignItems: "stretch" }}>
          {/* info panel */}
          <div style={{ background: "#16241c", borderRadius: 18, padding: "42px 38px", color: "#f4f2ea" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#7fb89a", marginBottom: 18 }}>{t.contact.eyebrow}</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 30, lineHeight: 1.2, color: "#f4f2ea", marginBottom: 18, textWrap: "balance" }}>{t.contact.title}</h2>
            <p style={{ fontSize: 15, color: "#b3c2b8", lineHeight: 1.65, marginBottom: 34, textWrap: "pretty" }}>{t.contact.intro}</p>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #2c4133" }}>
              <InfoRow label={t.contact.phoneLabel}><a href={PHONE_HREF} style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{PHONE}</a></InfoRow>
              <InfoRow label={t.contact.emailLabel}><a href={`mailto:${EMAIL}`} style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>{EMAIL}</a></InfoRow>
              <InfoRow label={t.contact.hoursLabel}><div style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>{t.contact.hoursVal}</div></InfoRow>
              <InfoRow label={t.contact.locLabel} last><div style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>Iowa, USA &middot; {t.contact.bizVal}</div></InfoRow>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

function InfoRow({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ padding: "16px 0", borderBottom: last ? undefined : "1px solid #2c4133" }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.4, textTransform: "uppercase", color: "#7d9488", marginBottom: 5 }}>{label}</div>
      {children}
    </div>
  );
}
