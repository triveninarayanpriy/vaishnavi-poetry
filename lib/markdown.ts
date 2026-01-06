import fs from "fs";
import path from "path";
import matter from "gray-matter";

const poemsDirectory = path.join(process.cwd(), "content/poems");

export interface PoemData {
  slug: string;
  title: string;
  date: string;
  theme: "Light" | "Dark" | "Vintage";
  image?: string;
  excerpt?: string;
  content: string;
}

export function getAllPoemSlugs(): string[] {
  try {
    if (!fs.existsSync(poemsDirectory)) {
      return [];
    }
    const fileNames = fs.readdirSync(poemsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Error reading poems directory:", error);
    return [];
  }
}

export function getPoemBySlug(slug: string): PoemData | null {
  try {
    const fullPath = path.join(poemsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      theme: data.theme || "Light",
      image: data.image,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    console.error(`Error reading poem ${slug}:`, error);
    return null;
  }
}

export function getAllPoems(): PoemData[] {
  const slugs = getAllPoemSlugs();
  const poems = slugs
    .map((slug) => getPoemBySlug(slug))
    .filter((poem): poem is PoemData => poem !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return poems;
}
