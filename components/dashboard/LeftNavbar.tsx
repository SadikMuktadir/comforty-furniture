'use client';

import Image from 'next/image';
import imageLogo from '../../public/image/dashboard-logo.png';
import Link from 'next/link';
import {
  House,
  ShoppingBag,
  Sofa,
  SquarePlus,
  Star,
  UserRoundPen,
  UsersRound,
} from 'lucide-react';
import { useUser } from '@/context/UserContext';

const LeftNavbar = () => {
  const { user } = useUser();

  const myProfile =
    user?.role === 'admin' ? '/admin/my-profile' : '/user/my-profile';
  const myCart = user?.role === 'admin' ? '/admin/my-cart' : '/user/my-cart';
  const myReview =
    user?.role === 'admin' ? '/admin/my-review' : '/user/my-review';

  const navItem =
    'group flex items-center gap-3 p-3 sm:p-4 rounded-lg text-white hover:bg-white/10 transition';

  return (
    <aside className='h-screen bg-[#1f2937] w-20 sm:w-64 fixed left-0 top-0'>
      {/* Logo */}
      <div className='flex items-center justify-center sm:justify-start gap-3 p-4'>
        <Image src={imageLogo} alt='logo' width={40} height={40} />
        <span className='hidden sm:block text-2xl font-semibold text-white'>
          Comforty
        </span>
      </div>

      <hr className='border-white/20 mb-2' />

      {/* Menu */}
      <nav className='px-2 space-y-1'>
        <Link href='/' className={navItem}>
          <House size={20} />
          <span className='hidden sm:block'>Home</span>
        </Link>

        <Link href={myProfile} className={navItem}>
          <UserRoundPen size={20} />
          <span className='hidden sm:block'>My Profile</span>
        </Link>

        <Link href={myCart} className={navItem}>
          <ShoppingBag size={20} />
          <span className='hidden sm:block'>My Cart</span>
        </Link>

        <Link href={myReview} className={navItem}>
          <Star size={20} />
          <span className='hidden sm:block'>Add Review</span>
        </Link>

        {/* Admin Only */}
        {user?.role === 'admin' && (
          <>
            <Link href='/admin/all-user' className={navItem}>
              <UsersRound size={20} />
              <span className='hidden sm:block'>All Users</span>
            </Link>

            <Link href='/admin/create-furniture' className={navItem}>
              <SquarePlus size={20} />
              <span className='hidden sm:block'>Create Furniture</span>
            </Link>

            <Link href='/admin/all-furniture' className={navItem}>
              <Sofa size={20} />
              <span className='hidden sm:block'>All Furniture</span>
            </Link>

            <Link href='/admin/all-reviews' className={navItem}>
              <Star size={20} />
              <span className='hidden sm:block'>All Reviews</span>
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default LeftNavbar;
