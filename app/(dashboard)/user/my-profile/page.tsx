/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useUser } from '@/context/UserContext';

const MyProfile = () => {
  const { user } = useUser();
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className='flex justify-center px-4 sm:px-0'>
      <div
        ref={divRef}
        className='
          relative
          w-full max-w-sm sm:max-w-md
          min-h-[420px] sm:min-h-[480px]
          rounded-xl p-0.5
          bg-white backdrop-blur-md
          text-gray-800
          overflow-hidden shadow-lg
        '
      >
        {/* Glow */}
        {visible && (
          <div
            className='
              pointer-events-none blur-2xl
              bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500
              w-64 h-64 absolute z-0 transition-opacity duration-300
            '
            style={{ top: position.y - 120, left: position.x - 120 }}
          />
        )}

        {/* Card Content */}
        <div className='relative z-10 bg-white p-4 sm:p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center'>
          <img
            src={user?.image}
            alt='Profile Avatar'
            className='w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md my-4 object-cover'
          />

          <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-1'>
            {user?.name}
          </h2>

          <p className='text-xs sm:text-sm text-indigo-500 font-medium mb-3'>
            Software Developer
          </p>

          <p className='text-sm text-gray-500 mb-4 px-2 sm:px-4'>
            Passionate about clean code, scalable systems, and solving
            real-world problems with elegant software.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mb-2 text-indigo-600'>
            <a href='#' className='hover:-translate-y-1 transition-transform'>
              <svg
                className='w-6 h-6 sm:w-7 sm:h-7'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44...' />
              </svg>
            </a>
            <a href='#' className='hover:-translate-y-1 transition-transform'>
              <svg
                className='w-6 h-6 sm:w-7 sm:h-7'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12.51 8.796v1.697...' />
              </svg>
            </a>
            <a href='#' className='hover:-translate-y-1 transition-transform'>
              <svg
                className='w-6 h-6 sm:w-7 sm:h-7'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M22 5.892a8.178...' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
