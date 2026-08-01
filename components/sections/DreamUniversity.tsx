import fs from "node:fs";
import path from "node:path";
import { DreamUniversityContent } from "@/components/sections/DreamUniversityContent";
import { ugmBackdropImages } from "@/data/ugmGallery";

/**
 * Server component: checks (at request/build time, on disk) whether each
 * expected UGM image actually exists in /public before asking the client
 * component to render it. Missing images fall back to an elegant
 * gradient placeholder instead of a broken <img> — no image errors.
 */
export function DreamUniversity() {
  const images = ugmBackdropImages.map((image) => {
    const filePath = path.join(process.cwd(), "public", image.src);
    let available = false;
    try {
      available = fs.existsSync(filePath);
    } catch {
      available = false;
    }
    return { ...image, available };
  });

  return <DreamUniversityContent images={images} />;
}
