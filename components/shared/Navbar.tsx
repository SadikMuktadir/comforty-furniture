import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <p>Logo</p>
      </div>
      <div>
        <p>Search Bar</p>
      </div>
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
    </div>
  );
};

export default Navbar;
