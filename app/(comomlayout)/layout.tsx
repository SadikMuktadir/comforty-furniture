import Navbar from '@/components/shared/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default HomeLayout;
