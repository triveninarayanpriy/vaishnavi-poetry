"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Share2 } from "lucide-react";
import { Poem } from "@/lib/types";
import { useState } from "react";

interface PoemCardProps {
  poem: Poem;
}

export default function PoemCard({ poem }: PoemCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const cardContent = (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        {poem.imageUrl && (
          <Image
            src={poem.imageUrl}
            alt={poem.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            {poem.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
          {poem.snippet}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`flex items-center gap-2 transition-colors ${
              isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
            aria-label="Like poem"
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
            />
            <span className="text-sm font-medium">Like</span>
          </button>

          <button
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Share poem"
          >
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </article>
  );

  // Link to poem detail page
  return (
    <Link href={`/poem/${poem.id}`} className="block h-full">
      {cardContent}
    </Link>
  );
}
