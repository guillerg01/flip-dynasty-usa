"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { useLang } from "@/lib/i18n";
import { HOME, PHONE, PHONE_HREF } from "@/lib/content";
import { CATS, CATUI, ORDER, type CategorySlug } from "@/lib/categories";

export default function CategoryView({ slug }: { slug: CategorySlug }) {
  const { lang } = useLang();
  const entry = CATS[slug];
  const cat = entry[lang];
  const t = CATUI[lang];
  const tf = HOME[lang];
  const year = new Date().getFullYear();
  const others = ORDER.filter((s) => s !== slug).map((s) => ({
    name: CATS[s][lang].name,
    href: `/category/${s}`,
  }));

  return (
    <>
      <Header base="/" />

      {/* HERO BAND */}
      <section style={{ position: "relative", height: 420, background: "#16241c" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.heroImg} alt={cat.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(15,26,20,0.88) 0%,rgba(15,26,20,0.55) 60%,rgba(15,26,20,0.3) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 36px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "#9fc4ae", marginBottom: 20, fontWeight: 500 }}>
            <Link href="/" className="crumb" style={{ color: "#9fc4ae" }}>{t.crumbHome}</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/#categories" className="crumb" style={{ color: "#9fc4ae" }}>{t.crumbCats}</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ color: "#e6efe9" }}>{cat.name}</span>
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#8fc4a7", marginBottom: 14 }}>{t.catEyebrow}</div>
          <h1 className="serif h1-hero" style={{ fontWeight: 600, fontSize: 48, lineHeight: 1.08, letterSpacing: -0.5, color: "#fff", maxWidth: 680, marginBottom: 18, textWrap: "balance" }}>{cat.name}</h1>
          <p style={{ fontSize: 18, color: "#cfdcd3", maxWidth: 600, lineHeight: 1.55, textWrap: "pretty" }}>{cat.tagline}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={{ padding: "84px 0 56px", background: "#f5f3ec" }}>
        <div className="cat-over-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#3f7d5c", marginBottom: 16 }}>{t.overviewEyebrow}</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 32, lineHeight: 1.18, color: "#16241c", marginBottom: 20, textWrap: "balance" }}>{cat.overTitle}</h2>
            <p style={{ fontSize: 16.5, color: "#4b574f", marginBottom: 16, textWrap: "pretty" }}>{cat.intro}</p>
            <p style={{ fontSize: 16.5, color: "#4b574f", textWrap: "pretty" }}>{cat.audience}</p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e1dccf", borderRadius: 16, padding: "28px 30px" }}>
            <div className="serif" style={{ fontWeight: 600, fontSize: 18, color: "#1f3a2e", marginBottom: 18 }}>{t.atAGlance}</div>
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ece8dd" }}>
              {cat.glance.map((g) => (
                <div key={g.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 0", borderBottom: "1px solid #ece8dd" }}>
                  <span style={{ fontSize: 13.5, color: "#7d8a80", fontWeight: 500 }}>{g.k}</span>
                  <span style={{ fontSize: 13.5, color: "#283831", fontWeight: 600, textAlign: "right" }}>{g.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GROUPS */}
      <section style={{ padding: "40px 0 92px", background: "#f5f3ec" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ marginBottom: 34 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#3f7d5c", marginBottom: 14 }}>{t.groupsEyebrow}</div>
            <h2 className="serif" style={{ fontWeight: 600, fontSize: 30, lineHeight: 1.18, color: "#16241c" }}>{t.groupsTitle}</h2>
          </div>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {cat.groups.map((gr) => (
              <div key={gr.name} style={{ background: "#fff", border: "1px solid #e1dccf", borderRadius: 14, padding: "24px 24px 26px" }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: "#eaf1ec", display: "flex", alignItems: "center", justifyContent: "center", color: "#1f8a5b", fontSize: 16, marginBottom: 16 }}>&#9632;</div>
                <h3 className="serif" style={{ fontWeight: 600, fontSize: 18, color: "#16241c", marginBottom: 8 }}>{gr.name}</h3>
                <p style={{ fontSize: 14, color: "#4b574f", lineHeight: 1.55 }}>{gr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER CATEGORIES */}
      <section style={{ padding: "64px 0", background: "#efece3", borderTop: "1px solid #e1dccf", borderBottom: "1px solid #e1dccf" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#3f7d5c", marginBottom: 22 }}>{t.otherTitle}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {others.map((o) => (
              <Link key={o.href} href={o.href} className="chip" style={{ background: "#fff", border: "1px solid #d8d3c6", borderRadius: 100, padding: "11px 20px", fontSize: 14.5, fontWeight: 600, color: "#1f3a2e", display: "inline-flex", alignItems: "center", gap: 8 }}>
                {o.name} <span style={{ fontSize: 14 }}>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 0", background: "#16241c" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 36px", textAlign: "center" }}>
          <h2 className="serif" style={{ fontWeight: 600, fontSize: 36, lineHeight: 1.15, color: "#fff", marginBottom: 18, textWrap: "balance" }}>{t.ctaTitle}</h2>
          <p style={{ fontSize: 17, color: "#b3c2b8", maxWidth: 560, margin: "0 auto 30px", lineHeight: 1.6, textWrap: "pretty" }}>{t.ctaSub}</p>
          <Link href="/#contact" className="cta-white" style={{ background: "#fff", color: "#16241c", fontSize: 15, fontWeight: 600, padding: "15px 30px", borderRadius: 10, display: "inline-block" }}>{tf.requestInfo}</Link>
        </div>
      </section>

      {/* FOOTER (compact, matches design's category footer) */}
      <footer style={{ background: "#10190f", padding: "40px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <span className="serif" style={{ width: 34, height: 34, borderRadius: 8, background: "#284536", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: "#fff", fontSize: 15 }}>FD</span>
            <span style={{ fontSize: 14, color: "#9fb3a6" }}>&copy; {year} Flip Dynasty Holdings LLC</span>
          </div>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/terms" className="footlink" style={{ color: "#9fb3a6", fontSize: 14 }}>{tf.footer.terms}</Link>
            <Link href="/privacy" className="footlink" style={{ color: "#9fb3a6", fontSize: 14 }}>{tf.footer.privacy}</Link>
            <a href={PHONE_HREF} className="footlink" style={{ color: "#9fb3a6", fontSize: 14 }}>{PHONE}</a>
          </div>
        </div>
      </footer>
    </>
  );
}
