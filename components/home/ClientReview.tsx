'use client';

import { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { getAllReview } from '@/services/review';
import Link from 'next/link';
import { Button } from '../ui/button';

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
      <div className='flex justify-center items-center py-20'>
        <p className='text-[#636270]'>Loading...</p>
      </div>
    );

  if (data.length === 0)
    return <p className='text-center py-20'>No Review found.</p>;

  return (
    <div className='bg-[#f0f2f3] py-20 px-6 sm:px-10 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Title */}
        <div className='mb-14 text-center sm:text-left'>
          <p className='text-[#272343] text-2xl sm:text-3xl md:text-4xl font-bold'>
            What Client Says About Us
          </p>
        </div>

        {/* Reviews */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {data.slice(0, 2).map((review) => (
            <div
              key={review._id}
              className='bg-white p-6 sm:p-8 rounded-xl shadow-lg'
            >
              <p className='text-base sm:text-lg text-[#636270] leading-relaxed'>
                {review.description}
              </p>

              <div className='flex items-center mt-8'>
                <Avatar className='mr-4'>
                  <AvatarImage src={review.image} alt={review.name} />
                </Avatar>

                <div>
                  <p className='text-[#272343] font-medium'>{review.name}</p>
                  <p className='text-[#9a9caa] text-sm'>{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='flex justify-center mt-14'>
          <Link href='/all-review'>
            <Button className='bg-[#029fae] hover:bg-[#028896] px-8 py-5'>
              See All
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
