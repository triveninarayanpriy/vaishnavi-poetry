import Navigation from "@/components/Navigation";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-5xl font-bold text-gray-900 mb-6">
          Library
        </h1>
        <p className="font-sans text-lg text-gray-600">
          Coming soon: Browse all poems by category, date, or mood.
        </p>
      </div>
    </div>
  );
}
