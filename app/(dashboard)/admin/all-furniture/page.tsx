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

const AllFurniure = () => {
  const [user, setUser] = useState<IFurniture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllFurniture();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (user.length === 0) return <p>No Furniture found.</p>;

  return (
    <div>
      <Table>
        <TableCaption>All registered users</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className='text-right'>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {user.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {item?.image ? (
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className='h-10 w-10 rounded-full object-cover'
                  />
                ) : (
                  'N/A'
                )}
              </TableCell>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.description}</TableCell>
              <TableCell className='text-right'>$ {item?.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllFurniure;
