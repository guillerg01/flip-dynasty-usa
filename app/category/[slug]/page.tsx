import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategoryView from "@/components/CategoryView";
import { CATS, ORDER, isCategory } from "@/lib/categories";

export function generateStaticParams() {
  return ORDER.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isCategory(slug)) return {};
  const c = CATS[slug].en;
  return {
    title: `${c.name} | Flip Dynasty Holdings LLC`,
    description: c.tagline,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isCategory(slug)) notFound();
  return <CategoryView slug={slug} />;
}
