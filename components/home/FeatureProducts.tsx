/* eslint-disable @next/next/no-img-element */
'use client';

import { IFurniture } from '@/app/(comomlayout)/product/page';
import { getAllFurniture } from '@/services/product';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Spinner } from '../ui/spinner';

const FeatureProducts = () => {
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
      <div className='flex justify-center items-center h-40'>
        <Spinner className='text-[#029fae]' />
      </div>
    );

  if (furniture.length === 0)
    return <p className='text-center'>No furniture found.</p>;

  return (
    <div className='my-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto'>
      {/* Section Title */}
      <div className='mb-12 text-center sm:text-left'>
        <p className='text-[#272343] text-2xl sm:text-3xl md:text-4xl font-bold'>
          Featured Products
        </p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {furniture.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className='flex flex-col rounded-xl border p-4 shadow-sm
                       transition hover:shadow-lg'
          >
            {/* Image */}
            <div className='mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100'>
              <img
                src={item.image}
                alt={item.name}
                className='h-full w-full object-cover hover:scale-105 transition duration-300'
              />
            </div>

            {/* Info */}
            <div className='flex flex-col justify-between flex-1'>
              <p className='mb-3 line-clamp-2 text-sm sm:text-base text-[#029fae]'>
                {item.description}
              </p>

              <p className='text-lg font-semibold text-[#272343]'>
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See All Button */}
      <div className='flex justify-center mt-14'>
        <Link href='/product'>
          <Button className='bg-[#029fae] hover:bg-[#028896] px-8 py-5'>
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
