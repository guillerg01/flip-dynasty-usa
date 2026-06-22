import { SITE_URL, SITE_NAME } from "@/lib/site";
import { EMAIL } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        legalName: "Flip Dynasty Holdings LLC",
        email: EMAIL,
        telephone: "+1-641-799-3953",
        description:
          "Iowa-registered B2B supply company sourcing and coordinating everyday consumer goods for local businesses, offices, retailers, distributors, and commercial accounts across the United States.",
        logo: `${SITE_URL}/icon.svg`,
        address: {
          "@type": "PostalAddress",
          addressRegion: "IA",
          addressCountry: "US",
        },
        areaServed: { "@type": "Country", name: "United States" },
        knowsLanguage: ["en", "es"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-641-799-3953",
          email: EMAIL,
          contactType: "sales",
          areaServed: "US",
          availableLanguage: ["English", "Spanish"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
