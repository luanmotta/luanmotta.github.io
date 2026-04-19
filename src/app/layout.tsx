import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://luanmotta.com";

const siteDescription =
  "Senior Product Engineer: end-to-end product delivery with React, Node.js, and TypeScript. Remote with U.S. and global teams since 2019. Fintech, scalable platforms, and LLM-backed features.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luan Motta | Senior Product Engineer",
    template: "%s · Luan Motta",
  },
  description: siteDescription,
  keywords: [
    "Luan Motta",
    "Senior Product Engineer",
    "Full-Stack Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "remote engineer",
    "product engineering",
  ],
  authors: [{ name: "Luan Motta", url: siteUrl }],
  creator: "Luan Motta",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    firstName: "Luan",
    lastName: "Motta",
    locale: "en_US",
    url: siteUrl,
    siteName: "Luan Motta",
    title: "Luan Motta | Senior Product Engineer",
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        alt: "Luan Motta, Senior Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Motta | Senior Product Engineer",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  appleWebApp: {
    title: "Luan Motta",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Luan Motta",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Luan Motta",
      url: siteUrl,
      image: `${siteUrl}/profile_minified.jpg`,
      jobTitle: "Senior Product Engineer",
      description: siteDescription,
      email: "luanmtrs@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/luanmotta/",
        "https://github.com/luanmotta",
      ],
      knowsAbout: [
        "Product engineering",
        "React",
        "Node.js",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "Full-stack development",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FME1N9D85Z"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FME1N9D85Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
