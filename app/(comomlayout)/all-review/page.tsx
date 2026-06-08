'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Spinner } from '@/components/ui/spinner';

import { getAllReview } from '@/services/review';

import { useEffect, useState } from 'react';

import { Quote, Star, MessageSquare } from 'lucide-react';

export interface IReview {
  _id: string;
  name: string;
  description: string;
  profession: string;
  image: string;
}

const AllReview = () => {
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
      <div className='flex min-h-[50vh] items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <Spinner className='text-[#029fae]' />

          <p className='text-muted-foreground'>Loading customer reviews...</p>
        </div>
      </div>
    );

  if (data.length === 0)
    return (
      <div className='flex min-h-[50vh] flex-col items-center justify-center text-center'>
        <MessageSquare className='h-16 w-16 text-[#029fae]' />

        <h2 className='mt-5 text-2xl font-bold'>No Reviews Found</h2>

        <p className='mt-2 text-muted-foreground'>
          Reviews will appear here soon.
        </p>
      </div>
    );

  return (
    <section className='relative overflow-hidden py-24'>
      {/* Background Glow */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='
            absolute top-0 left-0
            h-[350px] w-[350px]
            rounded-full
            bg-[#029fae]/10
            blur-[120px]
          '
        />

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

      <div className='max-w-7xl mx-auto px-4 lg:px-8'>
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
            <Star className='mr-2 h-4 w-4 fill-[#029fae]' />
            Customer Testimonials
          </span>

          <h1
            className='
              mt-5
              text-4xl sm:text-5xl
              font-bold
              text-foreground
            '
          >
            What Our Clients Say
          </h1>

          <p
            className='
              mt-5
              max-w-2xl mx-auto
              text-muted-foreground
              leading-8
            '
          >
            Discover why customers trust Comforty to transform their living
            spaces with elegant, premium-quality furniture.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          '
        >
          {data.map((review) => (
            <div
              key={review._id}
              className='
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-background/60
                backdrop-blur-xl
                p-8
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              '
            >
              {/* Quote Icon */}
              <div
                className='
                  absolute top-6 right-6
                  text-[#029fae]/20
                '
              >
                <Quote className='h-14 w-14' />
              </div>

              {/* Rating */}
              <div className='flex gap-1 mb-6'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='
                        h-4 w-4
                        fill-[#029fae]
                        text-[#029fae]
                      '
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                className='
                  text-muted-foreground
                  leading-8
                  line-clamp-5
                  min-h-[150px]
                '
              >
                {review.description}
              </p>

              {/* User */}
              <div
                className='
                  mt-8
                  flex items-center gap-4
                  border-t border-white/10
                  pt-6
                '
              >
                <Avatar className='h-14 w-14 ring-2 ring-[#029fae]/20'>
                  <AvatarImage src={review.image} alt={review.name} />
                </Avatar>

                <div>
                  <h3 className='font-semibold text-foreground'>
                    {review.name}
                  </h3>

                  <p className='text-sm text-muted-foreground'>
                    {review.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReview;
