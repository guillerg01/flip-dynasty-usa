"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import { LEGAL } from "@/lib/legal";

export default function LegalView({ doc }: { doc: "terms" | "privacy" }) {
  const { lang } = useLang();
  const d = LEGAL[doc][lang];

  return (
    <>
      <Header base="/" />
      <section style={{ background: "#16241c", padding: "70px 0 56px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 36px" }}>
          <h1 className="serif" style={{ fontWeight: 600, fontSize: 42, lineHeight: 1.1, color: "#fff", marginBottom: 14, textWrap: "balance" }}>{d.title}</h1>
          <p style={{ fontSize: 13.5, color: "#8fc4a7", fontWeight: 600, letterSpacing: 0.3 }}>{d.updated}</p>
        </div>
      </section>

      <section style={{ background: "#f5f3ec", padding: "64px 0 90px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 36px" }}>
          <p style={{ fontSize: 17, color: "#4b574f", lineHeight: 1.7, marginBottom: 44, textWrap: "pretty" }}>{d.intro}</p>
          {d.sections.map((s) => (
            <div key={s.h} style={{ marginBottom: 34 }}>
              <h2 className="serif" style={{ fontWeight: 600, fontSize: 22, color: "#16241c", marginBottom: 12 }}>{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} style={{ fontSize: 16, color: "#4b574f", lineHeight: 1.7, marginBottom: 10, textWrap: "pretty" }}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer base="/" />
    </>
  );
}
