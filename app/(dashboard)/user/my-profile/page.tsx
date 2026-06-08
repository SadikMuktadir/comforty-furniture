'use client';

/* eslint-disable @next/next/no-img-element */

import { useUser } from '@/context/UserContext';
import { Briefcase, Mail } from 'lucide-react';

const MyProfile = () => {
  const { user } = useUser();

  return (
    <section className='min-h-[70vh] flex items-center justify-center px-4 py-20'>
      <div
        className='
          relative
          w-full max-w-md
          rounded-[36px]
          border border-white/10
          bg-background/60
          backdrop-blur-xl
          shadow-2xl
          overflow-hidden
          p-8
          transition-all
          hover:shadow-[#029fae]/20
        '
      >
        {/* Background Glow */}
        <div
          className='
            absolute -top-24 -left-24
            h-64 w-64
            bg-[#029fae]/20
            blur-[120px]
            rounded-full
          '
        />

        <div
          className='
            absolute -bottom-24 -right-24
            h-64 w-64
            bg-[#029fae]/10
            blur-[120px]
            rounded-full
          '
        />

        {/* Content */}
        <div className='relative z-10 flex flex-col items-center text-center'>
          {/* Avatar */}
          <div className='relative'>
            <img
              src={user?.image}
              alt={user?.name}
              className='
                h-28 w-28
                rounded-full
                object-cover
                ring-4 ring-[#029fae]/20
                shadow-lg
              '
            />
          </div>

          {/* Name */}
          <h1 className='mt-6 text-2xl font-bold'>{user?.name}</h1>

          {/* Role */}
          <div
            className='
              mt-2
              inline-flex items-center gap-2
              rounded-full
              bg-[#029fae]/10
              px-4 py-1
              text-sm text-[#029fae]
            '
          >
            <Briefcase className='h-4 w-4' />
            {user?.role || 'User'}
          </div>

          {/* Email */}
          <div className='mt-4 flex items-center gap-2 text-muted-foreground text-sm'>
            <Mail className='h-4 w-4' />
            {user?.email}
          </div>

          {/* Bio */}
          <p className='mt-6 text-sm leading-7 text-muted-foreground max-w-sm'>
            Passionate customer of premium furniture collections. Loves clean
            interiors, modern design, and comfortable living spaces.
          </p>

          {/* Stats Card */}
          <div
            className='
              mt-8
              grid grid-cols-2
              gap-4
              w-full
            '
          >
            <div
              className='
                rounded-2xl
                border border-white/10
                bg-background/40
                p-4
              '
            >
              <p className='text-xs text-muted-foreground'>Account Type</p>
              <p className='mt-1 font-semibold text-[#029fae]'>
                {user?.role === 'admin' ? 'Admin' : 'Customer'}
              </p>
            </div>

            <div
              className='
                rounded-2xl
                border border-white/10
                bg-background/40
                p-4
              '
            >
              <p className='text-xs text-muted-foreground'>Status</p>
              <p className='mt-1 font-semibold text-green-500'>Active</p>
            </div>
          </div>

          {/* Button */}
          <button
            className='
              mt-8
              w-full
              rounded-2xl
              bg-[#029fae]
              hover:bg-[#028896]
              py-3
              font-medium
              text-white
              transition
            '
          >
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
