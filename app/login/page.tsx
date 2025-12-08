import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Login = () => {
  return (
    <div>
      <nav>
        <Button>
          <Link href='/'>Home</Link>
        </Button>
      </nav>
      <div>Login</div>
    </div>
  );
};

export default Login;
