import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'SR Infotech - Digital Marketing & Solutions',
  description: 'SR Infotech offers cutting-edge Bulk SMS, WhatsApp Marketing, and comprehensive Digital Solutions to empower businesses. Innovate, engage, and grow with our expert services.',
  keywords: ["SR Infotech, Bulk SMS, WhatsApp Marketing, Digital Solutions, SEO, web development, digital transformation, marketing agency, tech solutions, India"],
  openGraph: {
    "title": "SR Infotech - Digital Marketing & Solutions",
    "description": "SR Infotech offers cutting-edge Bulk SMS, WhatsApp Marketing, and comprehensive Digital Solutions to empower businesses. Innovate, engage, and grow with our expert services.",
    "url": "https://www.srinfotech.com",
    "siteName": "SR Infotech",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30142.jpg",
        "alt": "Digital marketing dashboard with neon green accents"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "SR Infotech - Digital Marketing & Solutions",
    "description": "SR Infotech offers cutting-edge Bulk SMS, WhatsApp Marketing, and comprehensive Digital Solutions to empower businesses. Innovate, engage, and grow with our expert services.",
    "images": [
      "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30142.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
