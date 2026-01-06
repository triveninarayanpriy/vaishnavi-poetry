import { client } from "./sanity";
import { SanityPoemDocument } from "./types";

export async function getAllPoems(): Promise<SanityPoemDocument[]> {
  const poems = await client.fetch(
    `*[_type == "poem"] | order(publishedAt desc) {
      _id,
      _createdAt,
      _updatedAt,
      _rev,
      _type,
      title,
      slug,
      body,
      coverImage,
      theme,
      excerpt,
      publishedAt
    }`
  );
  return poems;
}

export async function getPoemBySlug(
  slug: string
): Promise<SanityPoemDocument | null> {
  const poem = await client.fetch(
    `*[_type == "poem" && slug.current == $slug][0] {
      _id,
      _createdAt,
      _updatedAt,
      _rev,
      _type,
      title,
      slug,
      body,
      coverImage,
      theme,
      excerpt,
      publishedAt
    }`,
    { slug }
  );
  return poem;
}

export async function getPoemSlugs(): Promise<string[]> {
  const slugs = await client.fetch(
    `*[_type == "poem"].slug.current`
  );
  return slugs;
}
