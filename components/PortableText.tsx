import { PortableText as SanityPortableText, PortableTextComponents } from "next-sanity";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import { urlFor } from "@/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = urlFor(value).url();
      return (
        <div className="my-8 flex justify-center">
          <Image
            src={imageUrl}
            alt={value.alt || "Poem image"}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-lg leading-relaxed text-gray-800 my-4">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-serif font-bold text-gray-900 my-6">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-serif font-bold text-gray-900 my-5">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-serif font-semibold text-gray-900 my-4">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-serif font-semibold text-gray-900 my-3">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-4 text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => (
      <u className="underline">{children}</u>
    ),
    "strike-through": ({ children }: any) => (
      <s className="line-through">{children}</s>
    ),
    link: ({ children, value }: any) => {
      const href = value?.href;
      return (
        <a href={href} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
};

interface PortableTextProps {
  blocks: PortableTextBlock[];
}

export function PortableText({ blocks }: PortableTextProps) {
  return <SanityPortableText value={blocks} components={components} />;
}
