import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "PawsNest | Pet Adoption Platform",
  description:
    "A full-stack pet adoption platform for browsing pets, submitting adoption requests, and managing listings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
