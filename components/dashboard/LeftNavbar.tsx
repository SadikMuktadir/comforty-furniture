import Image from 'next/image';
import imageLogo from '../../public/image/dashboard-logo.png';
import Link from 'next/link';
import {
  House,
  ShoppingBag,
  SquarePlus,
  UserRoundPen,
  UsersRound,
} from 'lucide-react';

const LeftNavbar = () => {
  return (
    <div>
      <div className='flex justify-center p-5'>
        <div className='mr-5'>
          <Image
            src={imageLogo}
            alt='image-logo'
            height={50}
            width={50}
          ></Image>
        </div>
        <div>
          <p className='text-[35px] text-white'>Comforty</p>
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <Link href='/' className='block'>
          <div className='group text-white flex items-center p-5 rounded-lg hover:bg-white/10 transition'>
            <House className='mr-3 group-hover:text-white' />
            <span className='text-[20px] group-hover:text-white'>Home</span>
          </div>
        </Link>
        <Link href='/admin/my-profile' className='block'>
          <div className='group text-white flex items-center p-5 rounded-lg hover:bg-white/10 transition'>
            <UserRoundPen className='mr-3 group-hover:text-white' />
            <span className='text-[20px] group-hover:text-white'>
              My Profile
            </span>
          </div>
        </Link>
        <Link href='/admin/my-cart' className='block'>
          <div className='group text-white flex items-center p-5 rounded-lg hover:bg-white/10 transition'>
            <ShoppingBag className='mr-3 group-hover:text-white' />
            <span className='text-[20px] group-hover:text-white'>My Cart</span>
          </div>
        </Link>
        <Link href='/admin/all-user' className='block'>
          <div className='group text-white flex items-center p-5 rounded-lg hover:bg-white/10 transition'>
            <UsersRound className='mr-3 group-hover:text-white' />
            <span className='text-[20px] group-hover:text-white'>All User</span>
          </div>
        </Link>
        <Link href='/admin/create-furniture' className='block'>
          <div className='group text-white flex items-center p-5 rounded-lg hover:bg-white/10 transition'>
            <SquarePlus className='mr-3 group-hover:text-white' />
            <span className='text-[20px] group-hover:text-white'>
              Create Furniture
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftNavbar;
