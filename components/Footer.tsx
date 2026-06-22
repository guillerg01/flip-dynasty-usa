"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME, PHONE, PHONE_HREF } from "@/lib/content";

export default function Footer({ base = "" }: { base?: string }) {
  const { lang } = useLang();
  const t = HOME[lang];
  const f = t.footer;
  const a = (hash: string) => `${base}${hash}`;
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#16241c", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 36px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: 40,
            paddingBottom: 42,
            borderBottom: "1px solid #2c4133",
          }}
        >
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span
                className="serif"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#284536",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: "#fff",
                  fontSize: 17,
                }}
              >
                FD
              </span>
              <span className="serif" style={{ fontWeight: 600, fontSize: 17, color: "#f4f2ea" }}>
                Flip Dynasty Holdings LLC
              </span>
            </div>
            <p style={{ fontSize: 14.5, color: "#9fb3a6", lineHeight: 1.6 }}>{f.tagline}</p>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", color: "#7d9488", marginBottom: 16 }}>
              {f.navHead}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <a href={a("#about")} className="footlink" style={linkStyle}>{f.about}</a>
              <a href={a("#services")} className="footlink" style={linkStyle}>{f.products}</a>
              <a href={a("#categories")} className="footlink" style={linkStyle}>{t.nav.categories}</a>
              <a href={a("#contact")} className="footlink" style={linkStyle}>{f.inquiries}</a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", color: "#7d9488", marginBottom: 16 }}>
              {f.legalHead}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              <Link href="/terms" className="footlink" style={linkStyle}>{f.terms}</Link>
              <Link href="/privacy" className="footlink" style={linkStyle}>{f.privacy}</Link>
              <a href={PHONE_HREF} className="footlink" style={linkStyle}>{PHONE}</a>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 13, color: "#7d9488" }}>
            &copy; {year} Flip Dynasty Holdings LLC. {f.rights}
          </span>
          <span style={{ fontSize: 13, color: "#7d9488" }}>Iowa, USA</span>
        </div>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = { color: "#c2d0c6", fontSize: 14.5 };
