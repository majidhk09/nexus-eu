import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Nexus EU — Study in Lithuania for Pakistani & South Asian Students",
  description:
    "Your trusted education consultancy bridging South Asia and Europe. Discover Lithuanian universities, get expert guidance on applications, visas, scholarships and more.",
  keywords: [
    "Study in Lithuania",
    "Lithuanian universities",
    "Pakistani students Europe",
    "study abroad Europe",
    "Nexus EU",
    "EU education consultancy",
    "universities in Lithuania",
    "Vilnius University",
    "LSMU Medicine",
    "Kaunas University of Technology",
  ],
  openGraph: {
    title: "Nexus EU — Study in Lithuania",
    description:
      "Bridging South Asia and Europe. Discover universities, programmes, fees, and apply with expert guidance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
