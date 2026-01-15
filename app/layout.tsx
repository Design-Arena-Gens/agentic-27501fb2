import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Read My Message",
  description: "A clear and direct message display."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
