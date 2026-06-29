import Link from "next/link";
import { Mail, MapPin, PawPrint, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-200">
              <PawPrint />
            </span>

            <div>
              <h2 className="footer-title text-2xl font-black">PawsNest</h2>
              <p className="footer-subtitle text-sm font-semibold">
                Adopt with love
              </p>
            </div>
          </Link>

          <p className="footer-text mt-5 max-w-md leading-7">
            A modern pet adoption platform where safe homes, responsible owners,
            and loving companions meet through a transparent adoption flow.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="footer-social"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="footer-social text-xs"
            >
              IG
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-heading mb-5 text-lg font-bold">Explore</h3>

          <div className="flex flex-col gap-3">
            <Link href="/" className="footer-link">
              Home
            </Link>
            <Link href="/all-pets" className="footer-link">
              All Pets
            </Link>
            <Link href="/login" className="footer-link">
              Login
            </Link>
            <Link href="/register" className="footer-link">
              Register
            </Link>
          </div>
        </div>

        <div>
          <h3 className="footer-heading mb-5 text-lg font-bold">Contact</h3>

          <div className="space-y-4">
            <p className="footer-contact">
              <Phone size={18} className="text-orange-500" />
              +880 1700-000000
            </p>

            <p className="footer-contact">
              <Mail size={18} className="text-orange-500" />
              support@pawsnest.com
            </p>

            <p className="footer-contact">
              <MapPin size={18} className="text-orange-500" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-5 text-center text-sm">
        © {new Date().getFullYear()} PawsNest. All rights reserved.
      </div>
    </footer>
  );
}