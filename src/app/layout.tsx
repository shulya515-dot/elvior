import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/context/cart-context";
import { WishlistProvider } from "@/context/wishlist-context";

export const metadata: Metadata = {
  title: "ELVIOR — Premium Lifestyle Products in Bangladesh",
  description:
    "ELVIOR is a premium Bangladeshi lifestyle brand. Shop clothing, home decoration, accessories and gaming gear with cash on delivery nationwide.",
  keywords: "ELVIOR, lifestyle, premium, Bangladesh, clothing, home decor, accessories, gaming, cash on delivery",
  openGraph: {
    title: "ELVIOR — Premium Lifestyle Products in Bangladesh",
    description:
      "Considered clothing, decor, accessories and gaming gear. Fast delivery across Bangladesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELVIOR — Premium Lifestyle Products in Bangladesh",
    description:
      "Considered clothing, decor, accessories and gaming gear. Fast delivery across Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CartProvider>
            <WishlistProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
