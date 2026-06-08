'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import image1 from '../../public/image/image1.png';
import image2 from '../../public/image/image2.png';
import image3 from '../../public/image/image3.png';
import image4 from '../../public/image/image4.png';
import image5 from '../../public/image/image5.png';
import image6 from '../../public/image/image6.png';
import image7 from '../../public/image/image7.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const MaqueeCom = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-1/2 left-1/2
            h-[300px] w-[300px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="
              inline-flex items-center
              rounded-full
              border border-[#029fae]/20
              bg-[#029fae]/10
              px-4 py-2
              text-sm text-[#029fae]
            "
          >
            Trusted Worldwide
          </span>

          <h2
            className="
              mt-5
              text-3xl md:text-4xl
              font-bold
              text-foreground
            "
          >
            Trusted By Premium Brands
          </h2>

          <p
            className="
              mt-4
              text-muted-foreground
              max-w-2xl mx-auto
              leading-7
            "
          >
            We collaborate with world-class furniture and
            interior brands to deliver premium quality and
            modern living experiences.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-background/60
            backdrop-blur-2xl
            py-10
          "
        >
          {/* Left Gradient */}
          <div
            className="
              pointer-events-none
              absolute left-0 top-0 z-10
              h-full w-24
              bg-gradient-to-r
              from-background
              to-transparent
            "
          />

          {/* Right Gradient */}
          <div
            className="
              pointer-events-none
              absolute right-0 top-0 z-10
              h-full w-24
              bg-gradient-to-l
              from-background
              to-transparent
            "
          />

          <Marquee
            speed={45}
            pauseOnHover
            gradient={false}
          >
            <div className="flex items-center gap-8 md:gap-12 px-6">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="
                    group flex
                    h-[110px] w-[180px]
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:scale-105
                    hover:border-[#029fae]/30
                    hover:bg-[#029fae]/5
                  "
                >
                  <Image
                    src={img}
                    alt={`brand-${index}`}
                    className="
                      object-contain
                      w-[90px] md:w-[110px]
                      opacity-70
                      grayscale
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MaqueeCom;