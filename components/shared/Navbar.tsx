'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage } from '../ui/avatar';
import { logOut } from '@/services/AuthServices';

const Navbar = () => {
  const { user, setLoading } = useUser();
  console.log(user);

  const handleLogout = () => {
    logOut();
    setLoading(true);
  };

  return (
    <div className='flex justify-between'>
      <div>
        <p>Logo</p>
      </div>
      <div>
        <p>Search Bar</p>
      </div>
      <div>
        {user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user?.image} />
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
