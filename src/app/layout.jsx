import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TrustCare",
  description: "TrustCare is a healthcare service provider that offers a wide range of medical services to patients. We are committed to providing high-quality care and ensuring the well-being of our patients. Our team of experienced healthcare professionals is dedicated to delivering personalized care and support to meet the unique needs of each patient. Whether you need routine check-ups, specialized treatments, or emergency care, TrustCare is here to provide you with the best possible healthcare experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <header>
        <Navbar/>
      </header>

      <main className="py-2 w-11/12 md:w-10/12 mx-auto">
        {children}
      </main>
        
      </body>
    </html>
  );
}
