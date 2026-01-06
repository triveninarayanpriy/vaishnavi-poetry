"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, Heart, Share2 } from "lucide-react";
import type { PoemData } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";

const themeStyles = {
  Light: "bg-gradient-to-br from-amber-50 via-white to-rose-50",
  Dark: "bg-gradient-to-br from-stone-900 via-slate-800 to-neutral-900 text-white",
  Vintage: "bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50",
};

const themeTextStyles = {
  Light: "text-gray-900",
  Dark: "text-gray-100",
  Vintage: "text-gray-900",
};

const themeCardStyles = {
  Light: "bg-white/80 backdrop-blur-sm shadow-lg",
  Dark: "bg-stone-800/80 backdrop-blur-sm shadow-2xl border border-stone-700",
  Vintage: "bg-yellow-100/60 backdrop-blur-sm shadow-lg border border-amber-200",
};

interface PoemDetailClientProps {
  poem: PoemData;
}

export default function PoemDetailClient({ poem }: PoemDetailClientProps) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  const theme = poem.theme || "Light";
  const themeClass = themeStyles[theme];
  const textClass = themeTextStyles[theme];
  const cardClass = themeCardStyles[theme];

  const formattedDate = new Date(poem.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={`min-h-screen ${themeClass} transition-colors duration-300`}>
      {/* Header with Image */}
      {poem.image && (
        <div className="relative h-96 overflow-hidden">
          <Image
            src={poem.image}
            alt={poem.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className={`inline-flex items-center gap-2 mb-8 ${textClass} hover:opacity-70 transition-opacity`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        {/* Poem Container */}
        <article className={`${cardClass} rounded-2xl p-8 md:p-12`}>
          {/* Title */}
          <h1 className={`font-serif text-4xl md:text-5xl font-bold ${textClass} mb-6 text-center`}>
            {poem.title}
          </h1>

          {/* Metadata */}
          <div className={`flex items-center justify-center gap-6 mb-12 pb-8 border-b ${theme === "Dark" ? "border-stone-700" : "border-gray-200"}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 opacity-70" />
              <span className={`text-sm ${theme === "Dark" ? "text-gray-400" : "text-gray-600"}`}>
                {formattedDate}
              </span>
            </div>
            <div className={`w-1 h-1 rounded-full ${theme === "Dark" ? "bg-gray-600" : "bg-gray-400"}`} />
            <span className={`text-sm ${theme === "Dark" ? "text-gray-400" : "text-gray-600"} capitalize`}>
              {theme}
            </span>
          </div>

          {/* Poem Body */}
          <div className={`prose prose-lg max-w-none ${
            theme === "Dark" 
              ? "prose-invert prose-headings:text-gray-100 prose-p:text-gray-200" 
              : theme === "Vintage"
              ? "prose-headings:text-gray-900 prose-p:text-gray-800"
              : "prose-headings:text-gray-900 prose-p:text-gray-800"
          }`}>
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="whitespace-pre-wrap leading-relaxed my-4">{children}</p>,
              }}
            >
              {poem.content}
            </ReactMarkdown>
          </div>

          {/* Actions */}
          <div className={`mt-12 pt-8 border-t ${theme === "Dark" ? "border-stone-700" : "border-gray-200"} flex items-center justify-center gap-6`}>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                isLiked
                  ? "bg-red-500 text-white"
                  : theme === "Dark"
                  ? "bg-stone-700 text-gray-300 hover:bg-stone-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Like poem"
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              <span className="font-medium">{isLiked ? "Liked" : "Like"}</span>
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: poem.title,
                    text: poem.excerpt || `Check out this poem: ${poem.title}`,
                    url: window.location.href,
                  });
                }
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                theme === "Dark"
                  ? "bg-stone-700 text-gray-300 hover:bg-stone-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-label="Share poem"
            >
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
