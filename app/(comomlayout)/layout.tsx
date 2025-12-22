import BottomNavbar from '@/components/shared/BottomNavbar';
import Navbar from '@/components/shared/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='my-2'>
        <BottomNavbar></BottomNavbar>
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
