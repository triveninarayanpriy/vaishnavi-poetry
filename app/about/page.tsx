import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-5xl font-bold text-gray-900 mb-8">
          About
        </h1>
        <div className="prose prose-lg">
          <p className="font-sans text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to my digital poetry sanctuary. This is a space where words
            dance, emotions flow, and stories unfold through verse.
          </p>
          <p className="font-sans text-lg text-gray-600 leading-relaxed mb-6">
            Each poem is a reflection of moments lived, dreams dreamed, and
            feelings felt. Through this collection, I invite you to explore the
            landscapes of language and discover the beauty in everyday
            experiences.
          </p>
          <p className="font-sans text-lg text-gray-600 leading-relaxed">
            Thank you for visiting. May you find something here that resonates
            with your soul.
          </p>
        </div>
      </div>
    </div>
  );
}
