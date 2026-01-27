/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IFurniture } from '@/app/(comomlayout)/product/page';
import { getAllFurniture } from '@/services/product';

const AllFurniture = () => {
  const [furniture, setFurniture] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllFurniture();
      setFurniture(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (furniture.length === 0) return <p>No Furniture found.</p>;

  return (
    <div className='w-full overflow-x-auto px-2 sm:px-0'>
      <Table className='min-w-[700px]'>
        <TableCaption>All Furniture</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className='text-right'>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {furniture.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {item?.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-10 w-10 sm:h-12 sm:w-12 rounded-md object-cover'
                  />
                ) : (
                  'N/A'
                )}
              </TableCell>

              <TableCell className='font-medium'>{item.name}</TableCell>

              <TableCell className='max-w-[260px] truncate text-sm text-gray-600'>
                {item.description}
              </TableCell>

              <TableCell className='text-right font-semibold'>
                ${item.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllFurniture;
