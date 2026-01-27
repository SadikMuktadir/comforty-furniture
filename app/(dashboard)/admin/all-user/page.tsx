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
import { getAllUser } from '@/services/user';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  image?: string;
}

const AllUser = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getAllUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading User...</p>;
  if (user.length === 0) return <p>No User found.</p>;

  return (
    <div className='w-full overflow-x-auto px-2 sm:px-0'>
      <Table className='min-w-[700px]'>
        <TableCaption>All registered users</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className='text-right'>Role</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {user.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                {item?.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover'
                  />
                ) : (
                  'N/A'
                )}
              </TableCell>

              <TableCell className='font-medium'>{item.name}</TableCell>

              <TableCell className='max-w-[220px] truncate text-sm text-gray-600'>
                {item.email}
              </TableCell>

              <TableCell className='text-right'>
                <Button size='sm' className='bg-[#029fae] capitalize'>
                  {item.role}
                </Button>
              </TableCell>

              <TableCell className='text-right'>
                <Button size='icon' className='bg-red-500 hover:bg-red-600'>
                  <Trash2 className='h-4 w-4' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUser;
