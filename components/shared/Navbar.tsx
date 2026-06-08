'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Moon,
  Sun,
} from 'lucide-react';

import logoImage from '../../public/image/comforty-logo.png';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarImage } from '../ui/avatar';
import { useUser } from '@/context/UserContext';
import { protectedRoutes } from '@/constants';
import { logOut } from '@/services/AuthServices';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setLoading } = useUser();

  const { setTheme, theme } = useTheme();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    setLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-[80px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={logoImage}
            alt="logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>


        {/* Search */}
        <div className="hidden md:flex relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            type="search"
            placeholder="Search premium furniture..."
            className="pl-11 h-12 rounded-full border border-white/10 bg-muted/40 backdrop-blur-md focus-visible:ring-1"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted/40 border border-white/10 hover:scale-105 transition"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          {user && (
            <Link
              href={
                user.role === 'admin'
                  ? '/admin/my-cart'
                  : '/user/my-cart'
              }
              className="relative"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-muted/40 border border-white/10"
              >
                <ShoppingBag className="h-5 w-5" />
              </Button>

              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-[11px] text-white flex items-center justify-center">
                2
              </span>
            </Link>
          )}

          {/* User */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Avatar className="h-10 w-10 ring-2 ring-primary/30">
                  <AvatarImage src={user.image} alt={user.name} />
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-60 bg-background/90 backdrop-blur-xl"
              >
                <DropdownMenuLabel>
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  Role: {user.role}
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Button
                    onClick={handleLogout}
                    className="w-full rounded-full"
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="rounded-full px-6"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="rounded-full px-6 bg-[#029fae]">
                  Register
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-5 space-y-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

              <Input
                type="search"
                placeholder="Search furniture..."
                className="pl-10 rounded-full h-11"
              />
            </div>

            <div className="flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/about">About</Link>
            </div>

            {!user && (
              <div className="flex gap-3">
                <Link href="/login" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register" className="flex-1">
                  <Button className="w-full rounded-full">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;