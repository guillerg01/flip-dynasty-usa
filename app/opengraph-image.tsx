import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Flip Dynasty Holdings LLC — Consumer Goods & Business Supply";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#16241c",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 18,
              background: "#1f3a2e",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              border: "1px solid #2c4133",
            }}
          >
            FD
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#f4f2ea", fontSize: 34, fontWeight: 700 }}>
              Flip Dynasty Holdings LLC
            </span>
            <span
              style={{
                color: "#8fc4a7",
                fontSize: 18,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Iowa, USA
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              color: "#fff",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Everyday goods and supply coordination for commercial clients.
          </span>
          <span style={{ color: "#a9bcb0", fontSize: 26, fontFamily: "Arial, sans-serif" }}>
            B2B consumer goods · Business supply · Order coordination
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
