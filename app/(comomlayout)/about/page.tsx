'use client';

import { useState } from 'react';
import Image from 'next/image';
import bannerImg from '../../../public/image/banner-image.png';

import {
  ChevronDown,
  Sofa,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from 'lucide-react';

const AboutUs = () => {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const faqs = [
    {
      question:
        'Do you offer home delivery?',
      answer:
        'Yes! We provide fast and secure home delivery to ensure your furniture arrives safely and on time.',
    },
    {
      question:
        'Can I customize furniture?',
      answer:
        'Absolutely. Many of our furniture collections offer custom sizes, colors, and material options.',
    },
    {
      question:
        'Are your products premium quality?',
      answer:
        'Yes. We carefully craft every piece using premium materials to ensure durability, elegance, and long-lasting comfort.',
    },
    {
      question:
        'What is your return policy?',
      answer:
        'We offer an easy return policy for damaged or defective items to ensure complete customer satisfaction.',
    },
  ];

  const features = [
    {
      icon: Sofa,
      title: 'Premium Furniture',
      desc: 'Luxury-crafted furniture designed for elegant living.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      desc: 'Safe and reliable shipping for your convenience.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Shopping',
      desc: 'Trusted payment and secure customer support.',
    },
    {
      icon: BadgeCheck,
      title: 'Quality Guaranteed',
      desc: 'Built with premium materials for lasting comfort.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-0 left-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div
              className="
                absolute -inset-4
                rounded-[40px]
                bg-[#029fae]/10
                blur-3xl
              "
            />

            <div
              className="
                relative overflow-hidden
                rounded-[36px]
                border border-white/10
                bg-background/70
                backdrop-blur-xl
              "
            >
              <Image
                src={bannerImg}
                alt="Premium Furniture"
                className="
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
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
              About Comforty
            </span>

            <h1
              className="
                mt-5
                text-4xl sm:text-5xl
                font-bold
                text-foreground
                leading-tight
              "
            >
              Crafting Comfortable &
              Elegant Living Spaces
            </h1>

            <p
              className="
                mt-6
                text-muted-foreground
                leading-8
                text-lg
              "
            >
              At Comforty, we believe
              furniture should be more than
              functional — it should bring
              comfort, elegance, and timeless
              beauty into your home. Our
              premium collections are crafted
              for modern lifestyles.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map(
                (
                  item,
                  index
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-background/60
                        backdrop-blur-xl
                        p-5
                      "
                    >
                      <div
                        className="
                          flex h-12 w-12
                          items-center justify-center
                          rounded-xl
                          bg-[#029fae]/10
                          text-[#029fae]
                          mb-4
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map(
                  (
                    faq,
                    index
                  ) => (
                    <div
                      key={index}
                      className="
                        overflow-hidden
                        rounded-2xl
                        border border-white/10
                        bg-background/60
                        backdrop-blur-xl
                      "
                    >
                      <button
                        className="
                          flex w-full
                          items-center justify-between
                          p-5 text-left
                        "
                        onClick={() =>
                          setOpenIndex(
                            openIndex ===
                              index
                              ? null
                              : index
                          )
                        }
                      >
                        <h3 className="font-medium text-foreground">
                          {
                            faq.question
                          }
                        </h3>

                        <ChevronDown
                          className={`
                            h-5 w-5
                            transition-transform
                            duration-300
                            ${
                              openIndex ===
                              index
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                        />
                      </button>

                      <div
                        className={`
                          overflow-hidden
                          transition-all
                          duration-300
                          ${
                            openIndex ===
                            index
                              ? 'max-h-40 px-5 pb-5'
                              : 'max-h-0'
                          }
                        `}
                      >
                        <p className="text-muted-foreground leading-7">
                          {
                            faq.answer
                          }
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;