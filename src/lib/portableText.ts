import { vecinosPlusPostFallbackImages, type SanityBlock, type SanityPost } from "./sanity";

// Último recurso genérico para posts que no tengan mainImage en Sanity ni una
// entrada en vecinosPlusPostFallbackImages (p. ej. artículos nuevos agregados
// en Studio antes de subirles imagen).
const GENERIC_FALLBACK_IMAGES = [
  "/images/hero-bg.jpg",
  "/images/about-video.jpg",
  "/images/contact-pic.jpg",
];

export function getFallbackImage(index: number): string {
  return GENERIC_FALLBACK_IMAGES[index % GENERIC_FALLBACK_IMAGES.length];
}

export function getPostImage(post: Pick<SanityPost, "slug" | "imageUrl">, index: number): string {
  return post.imageUrl || vecinosPlusPostFallbackImages[post.slug] || getFallbackImage(index);
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-PA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderChildren(children: SanityBlock["children"] = [], markDefs: SanityBlock["markDefs"] = []): string {
  return children
    .map((child) => {
      let text = child.text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      if (child.marks?.includes("strong")) text = `<strong>${text}</strong>`;
      if (child.marks?.includes("em")) text = `<em>${text}</em>`;
      if (child.marks?.includes("underline")) text = `<u>${text}</u>`;

      // link marks
      const linkMark = child.marks?.find((m) =>
        markDefs?.some((def) => def._key === m && def._type === "link")
      );
      if (linkMark) {
        const def = markDefs?.find((d) => d._key === linkMark);
        if (def?.href)
          text = `<a href="${def.href}" class="text-sage underline hover:text-ink" target="_blank" rel="noopener">${text}</a>`;
      }

      return text;
    })
    .join("");
}

export function blocksToHtml(blocks: SanityBlock[]): string {
  return blocks
    .map((block) => {
      if (block._type !== "block") return "";

      const inner = renderChildren(block.children, block.markDefs);

      switch (block.style) {
        case "h1":
          return `<h1 class="font-display text-3xl font-semibold text-ink mt-10 mb-4">${inner}</h1>`;
        case "h2":
          return `<h2 class="font-display text-2xl font-semibold text-ink mt-8 mb-3">${inner}</h2>`;
        case "h3":
          return `<h3 class="font-display text-xl font-semibold text-ink mt-6 mb-2">${inner}</h3>`;
        case "h4":
          return `<h4 class="font-semibold text-lg text-ink mt-4 mb-2">${inner}</h4>`;
        case "blockquote":
          return `<blockquote class="border-l-4 border-sage pl-5 italic text-cocoa my-6 py-1">${inner}</blockquote>`;
        default:
          return inner
            ? `<p class="leading-7 text-cocoa mb-5">${inner}</p>`
            : `<br />`;
      }
    })
    .join("");
}
