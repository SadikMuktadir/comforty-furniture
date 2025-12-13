import BottomNavbar from '@/components/shared/BottomNavbar';
import Navbar from '@/components/shared/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='m-10'>
      <div className='mb-5'>
        <Navbar></Navbar>
      </div>
      <div className='mb-5'>
        <BottomNavbar></BottomNavbar>
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
