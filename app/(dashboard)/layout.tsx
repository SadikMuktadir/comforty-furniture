import LeftNavbar from '@/components/dashboard/LeftNavbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-slate-50'>
      {/* Sidebar */}
      <LeftNavbar />

      {/* Main Content */}
      <main
        className='
          ml-[85px]
          sm:ml-[280px]
          min-h-screen
          p-4 sm:p-6 lg:p-8
          transition-all duration-300
        '
      >
        <div
          className='
            rounded-3xl
            bg-white
            shadow-sm
            border border-slate-200
            p-5 sm:p-6 lg:p-8
            min-h-[calc(100vh-2rem)]
          '
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
