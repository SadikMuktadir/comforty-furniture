'use client';

import Image from 'next/image';

import boxImg from '../../public/image/box.png';
import truckImg from '../../public/image/delivery-truck.png';
import twentyFourImg from '../../public/image/24-hours.png';
import secureImg from '../../public/image/shield.png';

const features = [
  {
    title: 'Fast Delivery',
    description: 'Fast and reliable delivery service',
    image: boxImg,
  },
  {
    title: 'Free Shipping',
    description: 'Free shipping on all orders',
    image: truckImg,
  },
  {
    title: '24/7 Support',
    description: 'Dedicated customer support',
    image: twentyFourImg,
  },
  {
    title: 'Secure Payment',
    description: '100% secure online payment',
    image: secureImg,
  },
];

const BottomBanner = () => {
  return (
    <section className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20'>
      <div
        className='
          rounded-[32px]
          border border-white/10
          bg-background/80
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
        '
      >
        {/* subtle top accent */}
        <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-[#029fae] to-transparent' />

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
          {features.map((item, index) => (
            <div
              key={index}
              className='
                group relative
                p-7 lg:p-8
                border-b sm:border-r
                border-white/10
                last:border-r-0
                xl:border-b-0
                transition-all duration-300
                hover:bg-white/[0.03]
              '
            >
              <div className='flex items-start gap-5'>
                {/* Icon Box */}
                <div
                  className='
                    flex h-16 w-16 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-[#029fae]/10
                    border border-[#029fae]/20
                    transition-all duration-300
                    group-hover:scale-110
                    group-hover:bg-[#029fae]/20
                  '
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className='w-8 h-8 object-contain'
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className='
                      text-lg font-semibold
                      text-foreground
                      transition-colors duration-300
                    '
                  >
                    {item.title}
                  </h3>

                  <p className='mt-2 text-sm text-muted-foreground leading-6'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Accent */}
              <div
                className='
                  absolute bottom-0 left-0
                  h-[2px] w-0
                  bg-[#029fae]
                  transition-all duration-500
                  group-hover:w-full
                '
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
