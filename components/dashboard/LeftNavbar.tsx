'use client';

import Image from 'next/image';
import imageLogo from '../../public/image/dashboard-logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  ShoppingBag,
  Sofa,
  SquarePlus,
  Star,
  UserRoundPen,
  UsersRound,
  ChevronRight,
} from 'lucide-react';
import { useUser } from '@/context/UserContext';

const LeftNavbar = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const myProfile =
    user?.role === 'admin' ? '/admin/my-profile' : '/user/my-profile';

  const myCart = user?.role === 'admin' ? '/admin/my-cart' : '/user/my-cart';

  const myReview =
    user?.role === 'admin' ? '/admin/my-review' : '/user/my-review';

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: House,
    },
    {
      label: 'My Profile',
      href: myProfile,
      icon: UserRoundPen,
    },
    {
      label: 'My Cart',
      href: myCart,
      icon: ShoppingBag,
    },
    {
      label: 'Add Review',
      href: myReview,
      icon: Star,
    },
  ];

  const adminItems = [
    {
      label: 'All Users',
      href: '/admin/all-user',
      icon: UsersRound,
    },
    {
      label: 'Create Furniture',
      href: '/admin/create-furniture',
      icon: SquarePlus,
    },
    {
      label: 'All Furniture',
      href: '/admin/all-furniture',
      icon: Sofa,
    },
    {
      label: 'All Reviews',
      href: '/admin/all-reviews',
      icon: Star,
    },
  ];

  return (
    <aside
      className='
        fixed left-0 top-0 z-50
        h-screen
        w-[85px] sm:w-[280px]
        bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827]
        border-r border-white/10
        backdrop-blur-xl
        shadow-2xl
        overflow-y-auto
      '
    >
      {/* Logo */}
      <div className='sticky top-0 z-20 bg-[#111827]/80 backdrop-blur-xl border-b border-white/10 px-4 py-5'>
        <div className='flex items-center justify-center sm:justify-start gap-3'>
          <div className='rounded-xl bg-white/10 p-2'>
            <Image
              src={imageLogo}
              alt='logo'
              width={38}
              height={38}
              className='object-contain'
            />
          </div>

          <div className='hidden sm:block'>
            <h2 className='text-xl font-bold text-white'>Comforty</h2>
            <p className='text-xs text-slate-400'>Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className='px-3 py-5'>
        <p className='hidden sm:block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 px-3'>
          Main Menu
        </p>

        <nav className='space-y-2'>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group flex items-center
                  justify-center sm:justify-between
                  rounded-2xl px-4 py-3
                  transition-all duration-300
                  hover:scale-[1.02]
                  ${
                    isActive
                      ? 'bg-[#029fae] text-white shadow-lg shadow-cyan-500/20'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <div className='flex items-center gap-3'>
                  <Icon className='h-5 w-5 shrink-0' />

                  <span className='hidden sm:block text-sm font-medium'>
                    {item.label}
                  </span>
                </div>

                <ChevronRight className='hidden sm:block h-4 w-4 opacity-0 group-hover:opacity-100 transition' />
              </Link>
            );
          })}
        </nav>

        {/* Admin Section */}
        {user?.role === 'admin' && (
          <>
            <div className='my-6 border-t border-white/10' />

            <p className='hidden sm:block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 px-3'>
              Admin Panel
            </p>

            <nav className='space-y-2'>
              {adminItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      group flex items-center
                      justify-center sm:justify-between
                      rounded-2xl px-4 py-3
                      transition-all duration-300
                      hover:scale-[1.02]
                      ${
                        isActive
                          ? 'bg-[#029fae] text-white shadow-lg shadow-cyan-500/20'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <div className='flex items-center gap-3'>
                      <Icon className='h-5 w-5 shrink-0' />

                      <span className='hidden sm:block text-sm font-medium'>
                        {item.label}
                      </span>
                    </div>

                    <ChevronRight className='hidden sm:block h-4 w-4 opacity-0 group-hover:opacity-100 transition' />
                  </Link>
                );
              })}
            </nav>
          </>
        )}

        {/* Bottom User Info */}
        <div className='mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 hidden sm:block'>
          <p className='text-xs text-slate-400 mb-1'>Logged in as</p>
          <p className='font-medium text-white truncate'>
            {user?.name || 'Guest'}
          </p>
          <span className='inline-flex mt-2 rounded-full bg-[#029fae]/20 px-3 py-1 text-xs text-[#4fd1dd] capitalize'>
            {user?.role}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default LeftNavbar;
