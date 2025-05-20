import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Shreya Kumari - AI & Cloud Computing Specialist',
  description: 'Full-stack Software Developer specializing in AI, Cloud Computing, and Web Development. Building intelligent solutions at the intersection of AI and Cloud Computing.',
  keywords: 'AI Developer, Cloud Computing, Machine Learning, Full Stack Developer, Web Development, React, Python, FastAPI, BERT, OCR',
  authors: [{ name: 'Shreya Kumari' }],
  creator: 'Shreya Kumari',
  publisher: 'Shreya Kumari',
  openGraph: {
    title: 'Shreya Kumari - AI & Cloud Computing Specialist',
    description: 'Full-stack Software Developer specializing in AI, Cloud Computing, and Web Development. Building intelligent solutions at the intersection of AI and Cloud Computing.',
    url: 'https://shreyakumari.vercel.app',
    siteName: 'Shreya Kumari Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreya Kumari - AI & Cloud Computing Specialist',
    description: 'Full-stack Software Developer specializing in AI, Cloud Computing, and Web Development.',
    creator: '@ShreyaSingh0911',
    site: '@ShreyaSingh0911',
  },
  metadataBase: new URL('https://shreyakumari.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
