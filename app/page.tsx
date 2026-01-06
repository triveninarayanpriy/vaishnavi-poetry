import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import PoemCard from "@/components/PoemCard";
import { getAllPoems } from "@/lib/markdown";
import { SAMPLE_POEMS } from "@/lib/data";
import PaginatedPoems from "@/components/PaginatedPoems";

export default function Home() {
  // Get poems from markdown files
  let poems;
  try {
    const markdownPoems = getAllPoems();
    // Convert markdown poems to the Poem interface format
    poems = markdownPoems.map((poem) => ({
      id: poem.slug,
      title: poem.title,
      snippet: poem.excerpt || poem.content.substring(0, 150) + "...",
      imageUrl: poem.image || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    }));

    // If no markdown poems, use sample poems
    if (poems.length === 0) {
      poems = SAMPLE_POEMS;
    }
  } catch (error) {
    console.error("Error loading poems:", error);
    poems = SAMPLE_POEMS;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to My Poetry Collection
          </h1>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A curated collection of verses, thoughts, and emotions woven into
            words. Each poem is a journey, an exploration of the human
            experience through the art of language.
          </p>
        </div>
      </section>

      {/* Poems Grid */}
      <PaginatedPoems poems={poems} />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Vaishnavi's Poetry. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <a 
              href="/admin" 
              className="hover:text-gray-700 transition-colors"
            >
              Content Dashboard
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
