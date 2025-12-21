/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { getAllFurniture } from '@/services/product';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/hook';
import { addProduct } from '@/redux/features/cartSlice';

export interface IFurniture {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Furnitures = () => {
  const dispatch = useAppDispatch();
  const [furniture, setFurniture] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  const handleAddProduct = (item: IFurniture) => {
    dispatch(addProduct(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllFurniture();
        setFurniture(data);
      } catch (error) {
        console.error('Failed to load furniture', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className='text-center'>Loading furniture...</p>;
  if (furniture.length === 0)
    return <p className='text-center'>No furniture found.</p>;

  return (
    <div className='my-[100px] grid grid-cols-3 gap-8'>
      {furniture.map((item) => (
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

            <Button
              onClick={() => handleAddProduct(item)}
              className='cursor-pointer bg-[#029fae] text-white'
            >
              <ShoppingCart />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Furnitures;
