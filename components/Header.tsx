"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME } from "@/lib/content";

const activeTab: React.CSSProperties = {
  fontFamily: "inherit",
  border: "none",
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 700,
  padding: "8px 13px",
  background: "#1f3a2e",
  color: "#fff",
};
const idleTab: React.CSSProperties = {
  fontFamily: "inherit",
  border: "none",
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 600,
  padding: "8px 13px",
  background: "#fff",
  color: "#6b766e",
};

const navLink: React.CSSProperties = {
  color: "#42504a",
  fontSize: 14.5,
  fontWeight: 500,
};

/** base: "" on the home page (anchors stay local), "/" on other routes */
export default function Header({ base = "" }: { base?: string }) {
  const { lang, setLang } = useLang();
  const t = HOME[lang];
  const a = (hash: string) => `${base}${hash}`;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(245,243,236,0.9)",
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        borderBottom: "1px solid #e1dccf",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 36px",
          height: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 12, flex: "none" }}
        >
          <span
            className="serif"
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: "#1f3a2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              color: "#fff",
              fontSize: 18,
              letterSpacing: 0.5,
            }}
          >
            FD
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.12 }}>
            <span
              className="serif"
              style={{ fontWeight: 600, fontSize: 16, color: "#16241c", letterSpacing: 0.2 }}
            >
              Flip Dynasty Holdings
            </span>
            <span
              style={{
                fontSize: 10,
                letterSpacing: 2.6,
                textTransform: "uppercase",
                color: "#7d8a80",
                fontWeight: 600,
              }}
            >
              LLC &middot; Iowa, USA
            </span>
          </span>
        </Link>

        <nav className="nav-main" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href={a("#about")} className="navlink" style={navLink}>{t.nav.about}</a>
          <a href={a("#services")} className="navlink" style={navLink}>{t.nav.products}</a>
          <a href={a("#categories")} className="navlink" style={navLink}>{t.nav.categories}</a>
          <a href={a("#process")} className="navlink" style={navLink}>{t.nav.process}</a>
          <a href={a("#contact")} className="navlink" style={navLink}>{t.nav.contact}</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #d4cfc1",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <button onClick={() => setLang("en")} style={lang === "en" ? activeTab : idleTab} aria-pressed={lang === "en"}>EN</button>
            <button onClick={() => setLang("es")} style={lang === "es" ? activeTab : idleTab} aria-pressed={lang === "es"}>ES</button>
          </div>
          <a
            href={a("#contact")}
            className="btn-dark"
            style={{
              background: "#1f3a2e",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              padding: "11px 20px",
              borderRadius: 9,
              whiteSpace: "nowrap",
            }}
          >
            {t.requestInfo}
          </a>
        </div>
      </div>
    </header>
  );
}
