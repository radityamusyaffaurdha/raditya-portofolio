import fs from "node:fs";
import path from "node:path";
import { CertificatesContent } from "@/components/sections/CertificatesContent";
import { certificates } from "@/data/certificates";

/**
 * Server component: verifies each certificate image actually exists on
 * disk before the client renders it, so a missing file never shows a
 * broken image — it just falls back to the badge icon. All existing
 * certificate data (titles, years, verify links) is untouched.
 */
export function Certificates() {
  const entries = certificates.map((cert) => {
    let imageAvailable = false;
    if (cert.image) {
      const filePath = path.join(process.cwd(), "public", cert.image);
      try {
        imageAvailable = fs.existsSync(filePath);
      } catch {
        imageAvailable = false;
      }
    }
    return { ...cert, imageAvailable };
  });

  return <CertificatesContent certificates={entries} />;
}
