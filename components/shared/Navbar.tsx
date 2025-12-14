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
import { Search } from 'lucide-react';
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
    <div className='flex justify-between'>
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
            <DropdownMenu>
              <DropdownMenuTrigger className='cursor-pointer'>
                <Avatar>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='@shadcn'
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>
                  <nav>
                    <Button onClick={handleLogout}>Logout</Button>
                  </nav>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <div className='flex space-x-5'>
              <nav>
                <Button>
                  <Link href='/register'>Register</Link>
                </Button>
              </nav>
              <nav>
                <Button>
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
