'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterFormData, registrationSchema } from './RegistrationValidation';
import { currentUser, registerUser } from '@/services/AuthServices';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useUser } from '@/context/UserContext';
import { Loader } from 'lucide-react';

const RegistrationForm = () => {
  const { setUser, setLoading } = useUser();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      image: undefined as unknown as File,
      name: '',
      email: '',
      password: '',
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: RegisterFormData) => {
    const formData = new FormData();

    formData.append('file', data.image);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    try {
      const res = await registerUser(formData);
      if (res) {
        toast('Registration Succesfully...');
        const user = await currentUser();
        setUser(user);
        setLoading(false);
        router.refresh();
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-5'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-semibold'>
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Image</FormLabel>
                    <FormControl>
                      <Input
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(file);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your name'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your Email'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type your Password'
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className='w-full cursor-pointer bg-[#029fae]'
                type='submit'
              >
                {isSubmitting ? <Loader /> : 'Register'}
              </Button>
              <nav>
                <Button className='w-full bg-[#029fae]'>
                  <Link href='/'>Home</Link>
                </Button>
              </nav>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
