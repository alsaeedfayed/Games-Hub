import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./providers";
import AuthInit from "./AuthInit";
import QueryProvider from "@/lib/QueryProvider";
import { WishlistProvider } from "./contexts/WishListContext";

//Add Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-montserrat",
});
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
      <body className={`${montserrat.className} antialiased`}>
        <WishlistProvider>
          <QueryProvider>
            <ReduxProvider>
              <AuthInit />
              {children}
            </ReduxProvider>
          </QueryProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
