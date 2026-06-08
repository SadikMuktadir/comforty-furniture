'use client';

import { Button } from '../ui/button';
import bannerimg from '../../public/image/banner-image.png';
import bannerCirlce from '../../public/image/banner-circle.png';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#029fae]/10 blur-[100px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[300px] w-[300px] rounded-full bg-[#029fae]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#029fae]/20 bg-[#029fae]/10 px-4 py-2 text-sm text-[#029fae] mb-6">
              ✦ Premium Furniture Collection
            </span>

            <h1
              className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold tracking-tight
              text-foreground leading-[1.1]
            "
            >
              Modern Furniture For Your{' '}
              <span className="text-[#029fae]">
                Dream Interior
              </span>
            </h1>

            <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-8">
              Discover luxury furniture crafted for modern
              living. Elegant, comfortable, and designed to
              transform your interior into a beautiful space.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/product">
                <Button
                  className="
                  bg-[#029fae]
                  hover:bg-[#028896]
                  text-white
                  rounded-full
                  h-14
                  px-8
                  text-base
                  shadow-lg shadow-[#029fae]/30
                  transition-all duration-300
                  hover:scale-105
                "
                >
                  Shop Now
                  <MoveRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="
                  rounded-full
                  h-14
                  px-8
                  border-white/10
                  bg-muted/40
                  backdrop-blur-md
                "
              >
                Explore Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  10K+
                </h3>
                <p className="text-muted-foreground text-sm">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  500+
                </h3>
                <p className="text-muted-foreground text-sm">
                  Premium Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  4.9★
                </h3>
                <p className="text-muted-foreground text-sm">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] sm:w-[360px] md:w-[450px] lg:w-[520px] h-[420px] md:h-[520px]">
              {/* Glow Background */}
              <div className="absolute inset-0 rounded-full bg-[#029fae]/10 blur-[80px]" />

              {/* Circle */}
              <div className="absolute inset-0 animate-pulse opacity-80">
                <Image
                  src={bannerCirlce}
                  alt="banner circle"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Glass Card */}
              <div
                className="
                absolute inset-0 rounded-[40px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-md
              "
              />

              {/* Main Furniture Image */}
              <Image
                src={bannerimg}
                alt="banner furniture"
                fill
                priority
                className="
                  object-contain
                  relative z-10
                  hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;