import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterVal - Seamless RICS & IVS-Compliant Property Valuation Software",
  description: "InterVal is a cloud based solution that helps valuers to produce RICS & IVS standard-perfect reports in a fraction of the time with far fewer human errors.",
  keywords: ["property valuation", "RICS", "IVS", "valuation software", "real estate", "compliance"],
  openGraph: {
    title: "InterVal - The First All-in-One Property Valuation Solution",
    description: "Cloud based valuation software for RICS & IVS compliant reports",
    type: "website",
    url: "https://interval-soft.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
