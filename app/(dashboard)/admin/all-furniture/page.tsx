/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { IFurniture } from '@/app/(comomlayout)/product/page';
import { getAllFurniture } from '@/services/product';

import { Spinner } from '@/components/ui/spinner';

import { Tag, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AllFurniture = () => {
  const [furniture, setFurniture] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllFurniture();
        setFurniture(data);
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

  if (furniture.length === 0)
    return (
      <div className='flex min-h-[40vh] flex-col items-center justify-center text-center'>
        <Package className='h-14 w-14 text-[#029fae]' />
        <h2 className='mt-4 text-xl font-semibold'>No Furniture Found</h2>
        <p className='text-muted-foreground'>
          Your catalog is currently empty.
        </p>
      </div>
    );

  return (
    <section className='py-16 px-4 lg:px-10 max-w-7xl mx-auto'>
      {/* Header */}
      <div className='mb-12 text-center'>
        <Badge className='bg-[#029fae]/10 text-[#029fae] px-4 py-2'>
          <Tag className='h-4 w-4 mr-2' />
          Furniture Catalog
        </Badge>

        <h1 className='mt-4 text-3xl sm:text-4xl font-bold'>
          All Furniture Collection
        </h1>

        <p className='mt-3 text-muted-foreground'>
          Browse our complete selection of premium furniture pieces
        </p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {furniture.map((item) => (
          <div
            key={item._id}
            className='
              group
              rounded-[32px]
              border border-white/10
              bg-background/60
              backdrop-blur-xl
              overflow-hidden
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            '
          >
            {/* Image */}
            <div className='h-[220px] overflow-hidden'>
              <img
                src={item.image}
                alt={item.name}
                className='
                  h-full w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                '
              />
            </div>

            {/* Content */}
            <div className='p-6'>
              <h2 className='text-xl font-semibold'>{item.name}</h2>

              <p className='mt-2 text-sm text-muted-foreground line-clamp-2'>
                {item.description}
              </p>

              <div className='mt-5 flex items-center justify-between'>
                <span className='text-[#029fae] text-xl font-bold'>
                  ${item.price}
                </span>

                <span
                  className='
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-[#029fae]/10
                    text-[#029fae]
                  '
                >
                  In Stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllFurniture;
