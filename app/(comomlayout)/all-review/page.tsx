'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { getAllReview } from '@/services/review';
import { useEffect, useState } from 'react';

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
      setLoading(true);
      const data = await getAllReview();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (data.length === 0) return <p>No Review found.</p>;
  return (
    <div className='bg-[#f0f2f3] px-[200px] py-[80px]'>
      <div className='mb-20'>
        <p className='text-[#272343] text-[35px] font-bold'>
          What Client Says About Us
        </p>
      </div>
      <div className='flex gap-20 flex-wrap'>
        {data.map((review) => (
          <div
            key={review._id}
            className='bg-[#ffffff] p-10 shadow-lg rounded-lg w-full md:w-[45%]'
          >
            <div>
              <p className='text-[20px] text-[#636270]'>{review.description}</p>
            </div>
            <div className='flex mt-10 items-center'>
              <div className='mr-5'>
                <Avatar>
                  <AvatarImage src={review.image} alt={review.name} />
                </Avatar>
              </div>
              <div>
                <div>
                  <p className='text-[#272343]'>{review.name}</p>
                </div>
                <div>
                  <p className='text-[#9a9caa]'>{review.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
