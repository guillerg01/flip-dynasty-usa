import type { Metadata } from "next";
import LegalView from "@/components/LegalView";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Flip Dynasty Holdings LLC website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalView doc="terms" />;
}
