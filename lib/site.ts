// Canonical site origin. Set NEXT_PUBLIC_SITE_URL to the real domain in Vercel
// env vars once flipdynastyusa.com is live; falls back to the Vercel URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://flip-dynasty-usa.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Flip Dynasty Holdings LLC";
