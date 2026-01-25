/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { getAllFurniture } from '@/services/product';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch } from '@/redux/hook';
import { addProduct } from '@/redux/features/cartSlice';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';

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
    toast('Furniture added successfully');
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

  if (loading)
    return (
      <div className='flex justify-center items-center py-20'>
        <Spinner className='text-[#029fae]' />
      </div>
    );

  if (furniture.length === 0)
    return <p className='text-center py-20'>No furniture found.</p>;

  return (
    <div className='my-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {furniture.map((item) => (
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
                className='h-full w-full object-cover
                           transition-transform duration-300 hover:scale-105'
              />
            </div>

            {/* Info + Action */}
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='mb-2 line-clamp-2 text-sm sm:text-base text-[#029fae]'>
                  {item.description}
                </p>
                <p className='text-lg font-semibold text-[#272343]'>
                  ${item.price}
                </p>
              </div>

              <Button
                onClick={() => handleAddProduct(item)}
                className='bg-[#029fae] hover:bg-[#028896] p-3'
              >
                <ShoppingCart />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Furnitures;
