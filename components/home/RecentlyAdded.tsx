'use client';

/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { getAllFurniture } from '@/services/product';
import { IFurniture } from '@/app/(comomlayout)/product/page';
import { Spinner } from '../ui/spinner';
import { ArrowRight, Clock3, ShoppingBag } from 'lucide-react';

const RecentlyAdded = () => {
  const [furniture, setFurniture] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllFurniture();
        setFurniture(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className='flex items-center justify-center h-[300px]'>
        <div className='flex flex-col items-center gap-4'>
          <Spinner className='text-[#029fae] h-10 w-10' />
          <p className='text-muted-foreground text-sm'>
            Loading latest furniture...
          </p>
        </div>
      </div>
    );

  if (furniture.length === 0)
    return (
      <div className='text-center py-20'>
        <p className='text-muted-foreground'>No furniture found.</p>
      </div>
    );

  return (
    <section className='relative py-24 overflow-hidden'>
      {/* Glow Background */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='
            absolute bottom-0 right-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mb-14 flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='text-center lg:text-left'>
            <span
              className='
                inline-flex items-center gap-2
                rounded-full
                border border-[#029fae]/20
                bg-[#029fae]/10
                px-4 py-2
                text-sm text-[#029fae]
              '
            >
              <Clock3 className='h-4 w-4' />
              Recently Added
            </span>

            <h2
              className='
                mt-5
                text-3xl sm:text-4xl lg:text-5xl
                font-bold
                text-foreground
              '
            >
              Fresh Arrivals
            </h2>

            <p className='mt-4 text-muted-foreground max-w-xl'>
              Discover our newest furniture collection, carefully selected to
              elevate your modern living space with comfort and elegance.
            </p>
          </div>

          <Link href='/product'>
            <Button
              className='
                bg-[#029fae]
                hover:bg-[#028896]
                rounded-full
                px-8
                h-12
                shadow-lg
                shadow-[#029fae]/30
              '
            >
              Explore All
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>

        {/* Products */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {furniture
            .slice(-3)
            .reverse()
            .map((item) => (
              <div
                key={item._id}
                className='
                  group overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-background/70
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#029fae]/20
                  hover:shadow-2xl
                  hover:shadow-[#029fae]/10
                '
              >
                {/* Image */}
                <div className='relative overflow-hidden'>
                  <div className='aspect-square overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                      '
                    />
                  </div>

                  {/* New Badge */}
                  <div
                    className='
                      absolute top-4 left-4
                      rounded-full
                      bg-[#029fae]
                      px-4 py-1.5
                      text-xs font-medium text-white
                    '
                  >
                    New Arrival
                  </div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3
                    className='
                      text-xl font-semibold
                      text-foreground
                      line-clamp-1
                    '
                  >
                    {item.name}
                  </h3>

                  <p
                    className='
                      mt-3
                      text-sm
                      text-muted-foreground
                      line-clamp-2
                      leading-6
                    '
                  >
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className='mt-6 flex items-center justify-between'>
                    <div>
                      <span className='text-sm text-muted-foreground'>
                        Price
                      </span>

                      <h4 className='text-2xl font-bold text-foreground'>
                        ${item.price}
                      </h4>
                    </div>

                    <Button
                      size='icon'
                      className='
                        rounded-full
                        bg-[#029fae]
                        hover:bg-[#028896]
                        h-12 w-12
                      '
                    >
                      <ShoppingBag className='h-5 w-5' />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile CTA */}
        <div className='flex justify-center mt-14 lg:hidden'>
          <Link href='/product'>
            <Button
              className='
                bg-[#029fae]
                hover:bg-[#028896]
                rounded-full
                px-8 py-6
              '
            >
              See All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
