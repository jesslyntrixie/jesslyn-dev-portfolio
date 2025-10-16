import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PerformanceAwareBackground from './components/PerformanceAwareBackground';
import Navbar from './components/Navbar'; 

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
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black`}>
        <PerformanceAwareBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
