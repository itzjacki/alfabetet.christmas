import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kan du alfabetet?",
  description: "Gjør det fortjent til julegaven din!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='bg-[#f2e8cf]' lang='nb-NO'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width' />
        <title>Kan du alfabetet?</title>
      </head>
      <body className='min-h-screen flex flex-col justify-center items-center p-4 gap-4 max-w-md mx-auto'>
        {children}
      </body>
    </html>
  );
}
