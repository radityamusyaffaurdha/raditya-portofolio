import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeBootScript } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BackgroundLayers } from "@/components/background/BackgroundLayers";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radityamusyaffaurdha.dev"),
  title: {
    default: `${profile.name} — Student Developer Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description: profile.heroTagline,
  keywords: [
    "Raditya Musyaffa Urdha",
    "Student Developer",
    "SMK Muhammadiyah 1 Yogyakarta",
    "Portfolio",
    "Web Developer Yogyakarta",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — Student Developer Portfolio`,
    description: profile.heroTagline,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Student Developer Portfolio`,
    description: profile.heroTagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    affiliation: profile.school,
    address: profile.location,
    sameAs: socialLinks
      .filter((link) => !link.href.startsWith("mailto:"))
      .map((link) => link.href),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to set the correct theme and avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <SmoothScrollProvider>
              <LoadingScreen />
              <BackgroundLayers />
              <CustomCursor />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
