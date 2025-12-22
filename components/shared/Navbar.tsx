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
import { Search, ShoppingBag } from 'lucide-react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { usePathname, useRouter } from 'next/navigation';
import { protectedRoutes } from '@/constants';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setLoading } = useUser();

  const handleLogout = () => {
    logOut();
    setLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push('/');
    }
  };

  return (
    <div className='flex justify-between bg-[#f0f2f3] px-10 py-3'>
      <div>
        <Image src={logoImage} alt='logo-image' height={40} width={150}></Image>
      </div>
      <div className='relative w-1/2'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
        <Input type='search' placeholder='Search here ...' className='pl-10' />
      </div>

      <div>
        {user ? (
          <>
            <div className='flex gap-10'>
              <div className='my-auto cursor-pointer rounded-full p-2'>
                {user?.role === 'admin' ? (
                  <Link href='/admin/my-cart'>
                    <ShoppingBag />
                  </Link>
                ) : (
                  <Link href='/user/my-cart'>
                    <ShoppingBag />
                  </Link>
                )}
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className='cursor-pointer'>
                    <Avatar>
                      <AvatarImage src={user?.image} alt='' />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                    <DropdownMenuItem>{user?.role}</DropdownMenuItem>
                    <DropdownMenuItem>
                      <nav>
                        <Button className='bg-[#029fae]' onClick={handleLogout}>
                          Logout
                        </Button>
                      </nav>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='flex space-x-5'>
              <nav>
                <Button className='bg-[#029fae]'>
                  <Link href='/register'>Register</Link>
                </Button>
              </nav>
              <nav>
                <Button className='bg-[#029fae]'>
                  <Link href='/login'>Login</Link>
                </Button>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
