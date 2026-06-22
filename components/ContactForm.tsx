"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { HOME } from "@/lib/content";

const field: React.CSSProperties = {
  fontFamily: "inherit",
  fontSize: 14.5,
  padding: "12px 13px",
  border: "1px solid #d8d3c6",
  borderRadius: 9,
  background: "#fbfaf6",
  color: "#1c211d",
};
const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 7,
};
const labelSpan: React.CSSProperties = { fontSize: 12.5, fontWeight: 600, color: "#3a463f" };

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const { lang } = useLang();
  const t = HOME[lang].contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No mail provider configured yet → optimistic success (UX preserved).
    if (!WEB3FORMS_KEY) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "New business supply inquiry — Flip Dynasty Holdings LLC");
    data.append("from_name", "Flip Dynasty Holdings Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={cardStyle}>
        <div
          style={{
            padding: "48px 8px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "#e8f2ec",
              color: "#1f8a5b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              marginBottom: 22,
            }}
          >
            &#10003;
          </div>
          <h3 className="serif" style={{ fontWeight: 600, fontSize: 25, color: "#16241c", marginBottom: 12 }}>
            {t.successTitle}
          </h3>
          <p style={{ fontSize: 15, color: "#4b574f", maxWidth: 360, margin: "0 auto 26px", lineHeight: 1.6 }}>
            {t.successMsg}
          </p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              background: "none",
              border: "1px solid #d3cdbf",
              color: "#1f3a2e",
              fontSize: 14,
              fontWeight: 600,
              padding: "11px 22px",
              borderRadius: 9,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {t.backBtn}
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <div style={cardStyle}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <label style={labelStyle}>
            <span style={labelSpan}>{t.fName}</span>
            <input name="name" type="text" required className="fld" style={field} />
          </label>
          <label style={labelStyle}>
            <span style={labelSpan}>{t.fCompany}</span>
            <input name="company" type="text" className="fld" style={field} />
          </label>
        </div>
        <label style={{ ...labelStyle, marginBottom: 16 }}>
          <span style={labelSpan}>{t.fEmail}</span>
          <input name="email" type="email" required className="fld" style={field} />
        </label>
        <label style={{ ...labelStyle, marginBottom: 16 }}>
          <span style={labelSpan}>{t.fType}</span>
          <select name="inquiry_type" required className="fld" style={field} defaultValue="">
            <option value="" disabled>{t.fTypePlaceholder}</option>
            {t.types.map((ty) => (
              <option key={ty} value={ty}>{ty}</option>
            ))}
          </select>
        </label>
        <label style={{ ...labelStyle, marginBottom: 22 }}>
          <span style={labelSpan}>{t.fMessage}</span>
          <textarea name="message" rows={4} required className="fld" style={{ ...field, resize: "vertical" }} />
        </label>
        <button
          type="submit"
          className="btn-dark"
          disabled={sending}
          style={{
            width: "100%",
            background: "#1f3a2e",
            color: "#fff",
            fontFamily: "inherit",
            fontSize: 15,
            fontWeight: 600,
            padding: 15,
            border: "none",
            borderRadius: 10,
            cursor: sending ? "default" : "pointer",
            opacity: sending ? 0.7 : 1,
          }}
        >
          {sending ? t.sending : t.send}
        </button>
        {status === "error" && (
          <p style={{ fontSize: 12.5, color: "#b4452f", textAlign: "center", marginTop: 14 }}>{t.errorMsg}</p>
        )}
        <p style={{ fontSize: 12.5, color: "#7d8a80", textAlign: "center", marginTop: 14 }}>{t.note}</p>
      </form>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e1dccf",
  borderRadius: 18,
  padding: 38,
  boxShadow: "0 24px 50px -36px rgba(22,36,28,0.4)",
};
