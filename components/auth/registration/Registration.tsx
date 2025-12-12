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
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { registrationSchema } from './RegistrationValidation';
import { registerUser } from '@/services/AuthServices';
import Link from 'next/link';

const RegistrationForm = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // const [imageFile, setImageFile] = useState<File | null>(null);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0] ?? null;
  //   setImageFile(file);

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => setImagePreview(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };
  // const form = useForm({
  //   resolver: zodResolver(registrationSchema),
  // });

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   try {
  //     const formData = new FormData();

  //     // Append fields separately (NOT JSON STRING)
  //     formData.append('name', data.name);
  //     formData.append('email', data.email);
  //     formData.append('password', data.password);

  //     // Append file
  //     if (imageFile) {
  //       formData.append('file', imageFile);
  //     }

  //     const res = await registerUser(formData);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
              {/* <div>
                <Input
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  id='image-upload'
                  hidden
                />
                <Button>
                  <label htmlFor='image-upload'>Upload Image</label>
                </Button>
                {imagePreview && (
                  <div className='mt-2'>
                    <Image
                      src={imagePreview}
                      width={100}
                      height={100}
                      alt='preview'
                    />
                  </div>
                )}
              </div> */}
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
              <Button className='cursor-pointer' type='submit'>
                Submit
              </Button>
              <nav>
                <Button>
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
