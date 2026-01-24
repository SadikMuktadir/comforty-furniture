'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';
import { useUser } from '@/context/UserContext';

const BottomNavbar = () => {
  const { user } = useUser();

  return (
    <div className='border-t bg-white'>
      <NavigationMenu className='mx-auto max-w-7xl px-4'>
        <NavigationMenuList className='flex flex-wrap justify-center gap-6 py-4 text-sm sm:text-base'>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href='/' className='hover:text-[#029fae] transition'>
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href='/product' className='hover:text-[#029fae] transition'>
                Product
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href='/about' className='hover:text-[#029fae] transition'>
                About Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href='/contactus'
                className='hover:text-[#029fae] transition'
              >
                Contact Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {(user?.role === 'admin' || user?.role === 'user') && (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href={
                    user?.role === 'admin'
                      ? '/admin/my-profile'
                      : '/user/my-profile'
                  }
                  className='hover:text-[#029fae] transition font-medium'
                >
                  Dashboard
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default BottomNavbar;
