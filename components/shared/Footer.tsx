'use client';

import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../public/image/comforty-logo.png';
import { Input } from '../ui/input';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute bottom-0 left-0
            h-[300px] w-[300px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute top-0 right-0
            h-[300px] w-[300px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">
          {/* Brand */}
          <div className="xl:col-span-2">
            <Image
              src={logoImg}
              alt="Comforty Logo"
              width={180}
              height={60}
              className="object-contain"
            />

            <p className="mt-6 max-w-md text-muted-foreground leading-8">
              Comforty brings premium furniture crafted for
              modern living. Elegant, stylish, and built to
              transform your home into a luxurious and
              comfortable space.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {[
                Facebook,
                Instagram,
                Twitter,
                Linkedin,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/[0.03]
                    transition-all duration-300
                    hover:bg-[#029fae]
                    hover:text-white
                    hover:scale-110
                  "
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Company
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <Link
                href="/about"
                className="block hover:text-[#029fae] transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/career"
                className="flex items-center hover:text-[#029fae] transition-colors"
              >
                Careers

                <span
                  className="
                    ml-2 rounded-full
                    bg-[#029fae]
                    px-2 py-1
                    text-[10px]
                    font-medium
                    text-white
                  "
                >
                  Hiring
                </span>
              </Link>

              <Link
                href="/contactus"
                className="block hover:text-[#029fae] transition-colors"
              >
                Contact Us
              </Link>

              <Link
                href="/privacy"
                className="block hover:text-[#029fae] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Newsletter
            </h3>

            <p className="text-muted-foreground leading-7 mb-6">
              Subscribe to get furniture inspiration,
              exclusive offers, and interior updates.
            </p>

            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="
                  h-12
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                "
              />

              <button
                className="
                  flex items-center justify-center gap-2
                  rounded-xl
                  bg-[#029fae]
                  hover:bg-[#028896]
                  h-12
                  text-white
                  transition-all duration-300
                  shadow-lg
                  shadow-[#029fae]/30
                "
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16 pt-8
            border-t border-white/10
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
            text-sm text-muted-foreground
          "
        >
          <p>
            © 2026{' '}
            <span className="text-[#029fae] font-medium">
              Comforty
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-[#029fae]"
            >
              Terms
            </Link>

            <Link
              href="/privacy"
              className="hover:text-[#029fae]"
            >
              Privacy
            </Link>

            <Link
              href="/support"
              className="hover:text-[#029fae]"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;