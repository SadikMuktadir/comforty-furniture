import RegistrationForm from '@/components/auth/registration/Registration';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <nav>
        <Button>
          <Link href='/'>Home</Link>
        </Button>
      </nav>
      <div>
        <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
};

export default Register;
