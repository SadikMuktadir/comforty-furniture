'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { getAllReview } from '@/services/review';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Spinner } from '../ui/spinner';

export interface IReview {
  _id: string;
  name: string;
  description: string;
  profession: string;
  image: string;
}

const ClientReview = () => {
  const [data, setData] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllReview();
        setData(data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center h-[300px]'>
        <div className='flex flex-col items-center gap-4'>
          <Spinner className='text-[#029fae] h-10 w-10' />
          <p className='text-muted-foreground text-sm'>
            Loading client reviews...
          </p>
        </div>
      </div>
    );

  if (data.length === 0)
    return (
      <div className='py-20 text-center'>
        <p className='text-muted-foreground'>No reviews found.</p>
      </div>
    );

  return (
    <section className='relative overflow-hidden py-24'>
      {/* Background Glow */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='
            absolute left-0 top-1/2
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />

        <div
          className='
            absolute right-0 bottom-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span
            className='
              inline-flex items-center
              rounded-full
              border border-[#029fae]/20
              bg-[#029fae]/10
              px-4 py-2
              text-sm text-[#029fae]
            '
          >
            Client Testimonials
          </span>

          <h2
            className='
              mt-5
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              text-foreground
            '
          >
            What Our Clients Say
          </h2>

          <p className='mt-5 text-muted-foreground max-w-2xl mx-auto leading-7'>
            Trusted by homeowners and interior lovers. Hear what our happy
            customers say about their experience with our premium furniture.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {data.slice(0, 2).map((review) => (
            <div
              key={review._id}
              className='
                group relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-background/70
                backdrop-blur-2xl
                p-8 lg:p-10
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#029fae]/20
                hover:shadow-2xl
                hover:shadow-[#029fae]/10
              '
            >
              {/* Quote Icon */}
              <div
                className='
                  absolute top-8 right-8
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#029fae]/10
                  border border-[#029fae]/20
                '
              >
                <Quote className='h-6 w-6 text-[#029fae]' />
              </div>

              {/* Stars */}
              <div className='flex items-center gap-1 mb-6'>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className='
                      h-5 w-5
                      fill-yellow-400
                      text-yellow-400
                    '
                  />
                ))}
              </div>

              {/* Review */}
              <p
                className='
                  text-muted-foreground
                  text-base md:text-lg
                  leading-8
                '
              >
                {review.description}
              </p>

              {/* User */}
              <div className='flex items-center mt-10'>
                <Avatar className='h-14 w-14 border border-white/10'>
                  <AvatarImage src={review.image} alt={review.name} />
                </Avatar>

                <div className='ml-4'>
                  <h4 className='font-semibold text-foreground'>
                    {review.name}
                  </h4>

                  <p className='text-sm text-muted-foreground'>
                    {review.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='flex justify-center mt-16'>
          <Link href='/all-review'>
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
              View All Reviews
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
