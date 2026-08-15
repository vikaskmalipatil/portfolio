import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikas K Malipatil | Full-Stack Developer",
  description:
    "Portfolio of Vikas K Malipatil, a Computer Science student and full-stack developer seeking internship opportunities.",
  openGraph: {
    title: "Vikas K Malipatil | Full-Stack Developer",
    description:
      "Computer Science student building thoughtful full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
