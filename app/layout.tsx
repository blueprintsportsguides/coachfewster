import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coach Fewster | Egham",
  description: "Professional football coaching in Egham and surrounding areas. Private, small group, party, and camp sessions for young players.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <LayoutContainer>
              {children}
            </LayoutContainer>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

