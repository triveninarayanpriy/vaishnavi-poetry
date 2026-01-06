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

export default function PoemPage({ params }: { params: { slug: string } }) {
  const poem = getPoemBySlug(params.slug);

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
