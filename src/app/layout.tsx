import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:[ "300", "400","700" ,"900" ],
  subsets:["latin"],
});





export const metadata: Metadata = {
  title: "Governer Initiative",
  description: "Governer Initiative for Artificial Intelligence,Web 3.0 and Metaverse",
  icons:{
    icon:{url:"/logo.png", type: "image/png"}
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header/>
        <div className="mt-20 mb-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
