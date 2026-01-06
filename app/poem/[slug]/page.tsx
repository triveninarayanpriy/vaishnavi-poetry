import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { getPoemBySlug, getAllPoemSlugs } from "@/lib/markdown";
import PoemDetailClient from "@/components/PoemDetailClient";

export async function generateStaticParams() {
  const slugs = getAllPoemSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const poem = getPoemBySlug(slug);

  if (!poem) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <PoemDetailClient poem={poem} />
    </div>
  );
}
