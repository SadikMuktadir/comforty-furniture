'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import logoImage from '../../public/image/comforty-logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logOut } from '@/services/AuthServices';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { usePathname, useRouter } from 'next/navigation';
import { protectedRoutes } from '@/constants';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setLoading } = useUser();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    setLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push('/');
    }
  };

  return (
    <header className='bg-[#f0f2f3] border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logoImage} alt='logo' height={40} width={150} />
        </Link>

        {/* Search (Desktop) */}
        <div className='hidden md:block relative flex-1 max-w-md'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input type='search' placeholder='Search here...' className='pl-10' />
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-4'>
          {/* Cart */}
          {user && (
            <Link
              href={user.role === 'admin' ? '/admin/my-cart' : '/user/my-cart'}
              className='p-2 rounded-full hover:bg-gray-200'
            >
              <ShoppingBag />
            </Link>
          )}

          {/* User */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className='cursor-pointer'>
                <Avatar>
                  <AvatarImage src={user.image} alt={user.name} />
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{user.email}</DropdownMenuItem>
                <DropdownMenuItem>{user.role}</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    onClick={handleLogout}
                    className='bg-[#029fae] w-full'
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className='hidden sm:flex gap-3'>
              <Link href='/register'>
                <Button className='bg-[#029fae]'>Register</Button>
              </Link>
              <Link href='/login'>
                <Button className='bg-[#029fae]'>Login</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className='md:hidden p-2 rounded-lg hover:bg-gray-200'
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden px-4 pb-4 space-y-4 bg-[#f0f2f3]'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search here...'
              className='pl-10'
            />
          </div>

          {!user && (
            <div className='flex gap-3'>
              <Link href='/register' className='flex-1'>
                <Button className='bg-[#029fae] w-full'>Register</Button>
              </Link>
              <Link href='/login' className='flex-1'>
                <Button className='bg-[#029fae] w-full'>Login</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
