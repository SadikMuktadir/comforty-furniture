'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { getAllReview } from '@/services/review';

import { Spinner } from '@/components/ui/spinner';
import { Badge } from '@/components/ui/badge';

import { MessageSquareQuote, Star } from 'lucide-react';

export interface IReview {
  _id: string;
  name: string;
  description: string;
  profession: string;
  image: string;
}

const AllReviews = () => {
  const [data, setData] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const reviews = await getAllReview();
        setData(reviews);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className='flex min-h-[40vh] items-center justify-center'>
        <Spinner className='text-[#029fae]' />
      </div>
    );

  if (data.length === 0)
    return (
      <div className='flex min-h-[40vh] flex-col items-center justify-center text-center'>
        <MessageSquareQuote className='h-14 w-14 text-[#029fae]' />
        <h2 className='mt-4 text-xl font-semibold'>No Reviews Found</h2>
        <p className='text-muted-foreground'>
          Customer reviews will appear here.
        </p>
      </div>
    );

  return (
    <section className='py-16 px-4 lg:px-10 max-w-7xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12'>
        <Badge className='bg-[#029fae]/10 text-[#029fae] px-4 py-2'>
          <Star className='h-4 w-4 mr-2' />
          Customer Reviews
        </Badge>

        <h1 className='mt-4 text-3xl sm:text-4xl font-bold'>
          All Testimonials
        </h1>

        <p className='mt-3 text-muted-foreground'>
          What customers say about our furniture collection
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((item) => (
          <div
            key={item._id}
            className='
              relative
              rounded-[32px]
              border border-white/10
              bg-background/60
              backdrop-blur-xl
              p-6
              shadow-sm
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-xl
            '
          >
            {/* Quote icon */}
            <div className='absolute top-5 right-5 text-[#029fae]/20'>
              <MessageSquareQuote className='h-10 w-10' />
            </div>

            {/* Rating */}
            <div className='flex gap-1 mb-4'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className='h-4 w-4 text-[#029fae] fill-[#029fae]'
                />
              ))}
            </div>

            {/* Description */}
            <p className='text-muted-foreground leading-7 line-clamp-5'>
              {item.description}
            </p>

            {/* User */}
            <div className='mt-6 flex items-center gap-4 border-t border-white/10 pt-5'>
              <img
                src={item.image}
                alt={item.name}
                className='h-12 w-12 rounded-full object-cover ring-2 ring-[#029fae]/20'
              />

              <div>
                <h3 className='font-semibold'>{item.name}</h3>

                <p className='text-sm text-muted-foreground'>
                  {item.profession}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllReviews;
