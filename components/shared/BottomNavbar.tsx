'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/context/UserContext';

import {
  Home,
  Sofa,
  Info,
  Phone,
  LayoutDashboard,
} from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';

const BottomNavbar = () => {
  const { user } = useUser();
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
    },
    {
      name: 'Products',
      href: '/product',
      icon: Sofa,
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
    },
    {
      name: 'Contact',
      href: '/contactus',
      icon: Phone,
    },
  ];

  return (
    <div
      className="
        sticky top-[80px] z-40
        border-b border-white/10
        bg-background/80
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-background/60
      "
    >
      <NavigationMenu className="mx-auto max-w-7xl">
        <div className="w-full overflow-x-auto scrollbar-hide px-4 lg:px-8">
          <NavigationMenuList
            className="
              flex w-max min-w-full
              items-center justify-center
              gap-2 md:gap-3
              py-4
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`
                        group relative flex items-center gap-2
                        rounded-full px-5 py-3
                        text-sm font-medium
                        transition-all duration-300
                        hover:scale-[1.03]
                        whitespace-nowrap
                        ${
                          isActive
                            ? `
                              bg-[#029fae]
                              text-white
                              shadow-lg
                              shadow-[#029fae]/30
                            `
                            : `
                              text-muted-foreground
                              hover:bg-white/[0.04]
                              hover:text-foreground
                            `
                        }
                      `}
                    >
                      <Icon
                        className="
                          h-4 w-4
                          transition-transform duration-300
                          group-hover:scale-110
                        "
                      />

                      {item.name}

                      {/* Hover underline */}
                      {!isActive && (
                        <span
                          className="
                            absolute bottom-1 left-1/2
                            h-[2px] w-0
                            -translate-x-1/2
                            bg-[#029fae]
                            transition-all duration-300
                            group-hover:w-[60%]
                          "
                        />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}

            {/* Dashboard */}
            {(user?.role === 'admin' ||
              user?.role === 'user') && (
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href={
                      user?.role === 'admin'
                        ? '/admin/my-profile'
                        : '/user/my-profile'
                    }
                    className={`
                      group relative flex items-center gap-2
                      rounded-full px-5 py-3
                      text-sm font-medium
                      transition-all duration-300
                      hover:scale-[1.03]
                      whitespace-nowrap
                      ${
                        pathname.includes('/admin') ||
                        pathname.includes('/user')
                          ? `
                            bg-[#029fae]
                            text-white
                            shadow-lg
                            shadow-[#029fae]/30
                          `
                          : `
                            text-muted-foreground
                            hover:bg-white/[0.04]
                            hover:text-foreground
                          `
                      }
                    `}
                  >
                    <LayoutDashboard
                      className="
                        h-4 w-4
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />

                    Dashboard

                    {!pathname.includes('/admin') &&
                      !pathname.includes('/user') && (
                        <span
                          className="
                            absolute bottom-1 left-1/2
                            h-[2px] w-0
                            -translate-x-1/2
                            bg-[#029fae]
                            transition-all duration-300
                            group-hover:w-[60%]
                          "
                        />
                      )}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
};

export default BottomNavbar;