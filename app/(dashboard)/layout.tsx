import LeftNavbar from '@/components/dashboard/LeftNavbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='w-[20%] bg-[#1f263e] h-screen'>
        <LeftNavbar></LeftNavbar>
      </div>
      <div className='w-[80%]'>{children}</div>
    </div>
  );
};

export default DashboardLayout;
