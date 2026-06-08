/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { getAllFurniture } from '@/services/product';

import { ShoppingCart, Sofa, Sparkles } from 'lucide-react';

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
    toast.success('Furniture added successfully');

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
      <div className='flex min-h-[50vh] items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
          <Spinner className='text-[#029fae]' />

          <p className='text-muted-foreground'>Loading premium furniture...</p>
        </div>
      </div>
    );

  if (furniture.length === 0)
    return (
      <div className='flex flex-col items-center justify-center py-28'>
        <Sofa className='h-16 w-16 text-[#029fae] mb-4' />

        <h2 className='text-2xl font-semibold'>No Furniture Found</h2>

        <p className='text-muted-foreground mt-2'>Please check back later.</p>
      </div>
    );

  return (
    <section className='relative overflow-hidden py-20'>
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
            <Sparkles className='mr-2 h-4 w-4' />
            Premium Collection
          </span>

          <h1
            className='
              mt-5
              text-4xl sm:text-5xl
              font-bold
              text-foreground
            '
          >
            Discover Luxury Furniture
          </h1>

          <p
            className='
              mt-5
              max-w-2xl mx-auto
              text-muted-foreground
              leading-8
            '
          >
            Explore our elegant furniture collection designed for comfort,
            luxury, and modern living.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className='
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-8
          '
        >
          {furniture.map((item) => (
            <div
              key={item._id}
              className='
                  group
                  overflow-hidden
                  rounded-[32px]
                  border border-white/10
                  bg-background/60
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                '
            >
              {/* Image */}
              <div
                className='
                    relative
                    overflow-hidden
                    aspect-[4/4]
                  '
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    '
                />

                {/* Overlay */}
                <div
                  className='
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition
                    '
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3
                  className='
                      text-xl
                      font-semibold
                      text-foreground
                      line-clamp-1
                    '
                >
                  {item.name}
                </h3>

                <p
                  className='
                      mt-3
                      line-clamp-2
                      text-sm
                      text-muted-foreground
                      leading-6
                    '
                >
                  {item.description}
                </p>

                {/* Bottom */}
                <div
                  className='
                      mt-6
                      flex items-center
                      justify-between
                    '
                >
                  <div>
                    <p className='text-sm text-muted-foreground'>Price</p>

                    <p
                      className='
                          text-2xl
                          font-bold
                          text-[#029fae]
                        '
                    >
                      ${item.price}
                    </p>
                  </div>

                  <Button
                    onClick={() => handleAddProduct(item)}
                    className='
                        h-12 w-12
                        rounded-2xl
                        bg-[#029fae]
                        hover:bg-[#028896]
                        shadow-lg
                        shadow-[#029fae]/30
                      '
                  >
                    <ShoppingCart className='h-5 w-5' />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Furnitures;
