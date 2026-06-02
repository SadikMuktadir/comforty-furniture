import BottomNavbar from '@/components/shared/BottomNavbar';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { ThemeProvider } from '@/components/ui/theme-provider';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className='my-2'>
        <BottomNavbar></BottomNavbar>
      </div>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
