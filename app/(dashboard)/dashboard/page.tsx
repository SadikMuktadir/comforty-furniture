import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      <Button>
        <Link href='/'>Home</Link>
      </Button>
    </div>
  );
};

export default Dashboard;
