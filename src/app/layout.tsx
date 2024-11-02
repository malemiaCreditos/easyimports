import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../components/vendor/bootstrap/css/bootstrap.min.css";
import "../components/vendor/bootstrap-icons/bootstrap-icons.css";
import "../components/vendor/aos/aos.css";
import "../components/vendor/fontawesome-free/css/all.min.css";
import "../components/vendor/glightbox/css/glightbox.min.css";
import "../components/vendor/swiper/swiper-bundle.min.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easy Imports Mozambique",
  description: "Importação e Logistica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      </body>
    </html>
  );
}
