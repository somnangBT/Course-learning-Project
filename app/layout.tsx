import type { Metadata } from "next";
import { Geist_Mono, Moul } from "next/font/google";
import "./globals.css";

const khmerMoul = Moul({
  variable: "--font-moul",
  subsets: ["khmer", "latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "រៀនល្អ | បើកឱកាសសម្រាប់អ្វីដែលនៅបន្ទាប់",
  description:
    "ស្វែងរកជំនាញថ្មីៗ និងរៀនតាមល្បឿនដែលសមនឹងអ្នកជាមួយ រៀនល្អ។",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="km"
      className={`${khmerMoul.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
