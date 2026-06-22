import type { Metadata } from "next";
import LegalView from "@/components/LegalView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Flip Dynasty Holdings LLC website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalView doc="privacy" />;
}
