import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Nation 2.0",
  description: "Restoring nature & rebuilding tomorrow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
