'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';
import { getAllUser } from '@/services/user';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Badge } from '@/components/ui/badge';

import { Trash2, Users, Shield, Mail } from 'lucide-react';

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
      try {
        setLoading(true);
        const data = await getAllUser();
        setUser(data);
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

  if (user.length === 0)
    return (
      <div className='flex min-h-[40vh] flex-col items-center justify-center text-center'>
        <Users className='h-14 w-14 text-[#029fae]' />
        <h2 className='mt-4 text-xl font-semibold'>No Users Found</h2>
        <p className='text-muted-foreground'>
          Registered users will appear here.
        </p>
      </div>
    );

  return (
    <section className='py-16 px-4 lg:px-10 max-w-7xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12'>
        <Badge className='bg-[#029fae]/10 text-[#029fae] px-4 py-2'>
          <Users className='h-4 w-4 mr-2' />
          User Management
        </Badge>

        <h1 className='mt-4 text-3xl sm:text-4xl font-bold'>
          All Registered Users
        </h1>

        <p className='mt-3 text-muted-foreground'>
          Manage system users and roles
        </p>
      </div>

      {/* Grid */}
      <div className='grid gap-6'>
        {user.map((item) => (
          <div
            key={item._id}
            className='
              flex flex-col md:flex-row
              items-center justify-between
              gap-6
              rounded-[28px]
              border border-white/10
              bg-background/60
              backdrop-blur-xl
              p-6
              transition-all
              hover:shadow-xl
            '
          >
            {/* Left */}
            <div className='flex items-center gap-4 w-full md:w-auto'>
              <img
                src={item.image}
                alt={item.name}
                className='
                  h-14 w-14
                  rounded-full
                  object-cover
                  ring-2 ring-[#029fae]/20
                '
              />

              <div>
                <h2 className='font-semibold'>{item.name}</h2>

                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Mail className='h-4 w-4' />
                  {item.email}
                </div>
              </div>
            </div>

            {/* Role */}
            <div className='flex items-center'>
              <Badge
                className='
                  bg-[#029fae]/10
                  text-[#029fae]
                  px-4 py-2
                  capitalize
                '
              >
                <Shield className='h-4 w-4 mr-2' />
                {item.role}
              </Badge>
            </div>

            {/* Action */}
            <Button
              size='icon'
              className='
                bg-red-500
                hover:bg-red-600
                rounded-xl
              '
            >
              <Trash2 className='h-4 w-4' />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllUser;
