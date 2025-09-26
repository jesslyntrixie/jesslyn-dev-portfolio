import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Galaxy from './components/Galaxy'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jesslyn Trixie Edvilie | Portfolio",
  description: "Jesslyn's dev portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black`}>
        <div className="fixed top-0 left-0 w-full h-full -z-10 ">
          <Galaxy 
            mouseInteraction={true}
            transparent={true}
            density={0.9}
            glowIntensity={0.2}
            twinkleIntensity={0.9}
            hueShift={220}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
