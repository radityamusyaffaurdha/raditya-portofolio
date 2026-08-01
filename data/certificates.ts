import type { CertificateItem } from "@/types";

/**
 * Drop a matching image into /public/images/certificates and reference it
 * here via the optional `image` field once available.
 */
export const certificates: CertificateItem[] = [
  {
    title: "ABP Startup Incubator",
    year: "2026",
    image: "/images/certificates/abp-1.jpg",
    verifyUrl: "https://coderank.indonesiait.com/verify/CERT-878DCE9522",
  },
  {
    title: "ABP Startup Incubator",
    year: "2026",
    image: "/images/certificates/abp-2.jpg",
    verifyUrl: "https://coderank.indonesiait.com/verify/CERT-90BC68DB9A",
  },
  {
    title: "Amikom Business Park",
    year: "2026",
    image: "/images/certificates/amikom-1.jpg",
    verifyUrl: "https://sertiku.id/verifikasi/53b1418a-5aa7-4084-b51f-0e5d98905647",
  },
];
