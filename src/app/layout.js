import "./globals.css";

export const metadata = {
  title: "Brain Rush 2K23",
  description: "by CSE Departement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-background text-gray300">{children}</body>
    </html>
  );
}
