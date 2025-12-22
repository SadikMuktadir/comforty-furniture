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
    <div className='my-[100px] '>
      <div className='mb-[50px]'>
        <p className='text-[#272343] text-[35px] font-bold'>
          Featured Products
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {furniture.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className='flex h-[500px] flex-col justify-between rounded-lg border p-4 shadow-sm'
          >
            <div className='mb-4 flex items-center justify-center overflow-hidden'>
              <img src={item.image} alt={item.name} className='h-full w-full' />
            </div>

            <div className='flex items-end justify-between'>
              <div>
                <p className='mb-2 line-clamp-2 text-[16px] text-[#029fae]'>
                  {item.description}
                </p>
                <p className='text-[18px] font-semibold'>${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-[50px]'>
        <Link href='/product'>
          <Button className='bg-[#029fae] cursor-pointer'>See All</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureProducts;
