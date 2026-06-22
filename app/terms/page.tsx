import type { Metadata } from "next";
import LegalView from "@/components/LegalView";

export const metadata: Metadata = {
  title: "Terms of Use | Flip Dynasty Holdings LLC",
  description: "Terms of Use for the Flip Dynasty Holdings LLC website.",
};

export default function TermsPage() {
  return <LegalView doc="terms" />;
}
