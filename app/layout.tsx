import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import LoginModal from "@/components/Modals/LoginModal";
import SignUpModal from "@/components/Modals/SignUpModal";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eatly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <div className="mt-[160px]">{children}</div>
          <Footer />
        </div>
        <LoginModal />
        <SignUpModal />
      </body>
    </html>
  );
}
