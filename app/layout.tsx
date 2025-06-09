import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waseem Isaac",
  description: "Software Engineer && Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
