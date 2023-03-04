"use client";

import "./globals.css";

export const metadata = {
  title: "Brain Rush 2K23",
  description: "by CSE Departement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-900 text-gray-300">{children}</body>
    </html>
  );
}
