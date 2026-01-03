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
    <div>
      <Table>
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
            <TableRow key={item?.email}>
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
              <TableCell>{item?.email}</TableCell>

              <TableCell className='text-right'>
                {item?.role === 'admin' ? (
                  <Button className='bg-[#029fae] cursor-pointer'>
                    {item?.role}
                  </Button>
                ) : (
                  <Button className='bg-[#029fae] cursor-pointer'>
                    {item?.role}
                  </Button>
                )}
              </TableCell>
              <TableCell className='text-right'>
                <Button className='bg-[#029fae] cursor-pointer'>
                  <Trash2 />
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
