import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sette Portfolio",
  description: "Hi, I'm Sette, a web developer and RPA developer. This is my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><style>
    @import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');
    </style>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
