import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raditya Musyaffa Urdha — Portfolio",
    short_name: "Rad. Portfolio",
    description:
      "Student developer portfolio — programming, web development, and UI/UX design.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070f",
    theme_color: "#05070f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
