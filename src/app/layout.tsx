import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/main-nav";
import MainFooter from "@/components/main-footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YumeNime",
  description: "Watch anime online for free without ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-poppins`}>
        <div className="h-full w-full px-8 py-5">
          <MainNav />
          <main>{children}</main>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
