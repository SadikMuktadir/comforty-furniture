import LeftNavbar from '@/components/dashboard/LeftNavbar';
import { ThemeProvider } from '@/components/ui/theme-provider';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-[20%] bg-[#1f263e] h-screen'>
        <LeftNavbar></LeftNavbar>
      </div>
      <div className='w-[80%]'>
        {' '}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
