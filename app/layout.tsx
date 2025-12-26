import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaming App",
  description: "A simple gaming application",
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
