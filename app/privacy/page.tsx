import type { Metadata } from "next";
import LegalView from "@/components/LegalView";

export const metadata: Metadata = {
  title: "Privacy Policy | Flip Dynasty Holdings LLC",
  description: "Privacy Policy for the Flip Dynasty Holdings LLC website.",
};

export default function PrivacyPage() {
  return <LegalView doc="privacy" />;
}
