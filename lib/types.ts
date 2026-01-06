import { SanityImageSource } from "next-sanity/image-url";
import { PortableTextBlock } from "sanity";

export interface Poem {
  id: string;
  title: string;
  snippet: string;
  imageUrl: string;
  fullText?: string;
  author?: string;
  date?: string;
}

// Sanity CMS types
export interface SanityPoemDocument {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "poem";
  title: string;
  slug: {
    current: string;
  };
  body: PortableTextBlock[];
  coverImage?: {
    asset: {
      _id: string;
      _type: "sanity.imageAsset";
      url: string;
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  theme: "elegant-light" | "dark-academia" | "vintage-typewriter";
  excerpt?: string;
  publishedAt: string;
}

export type Theme = "elegant-light" | "dark-academia" | "vintage-typewriter";

