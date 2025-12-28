/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { createReviewData } from '@/services/review';
const CreateReviewComponent = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      profession: undefined,
      image: undefined as unknown as File,
    },
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append('file', data.image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('profession', data.profession);

    const res = await createReviewData(formData);
    console.log(res);
  };
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-5'>
      <Card className='w-full max-w-md shadow-xl'>
        <CardHeader>
          <CardTitle className='text-center text-2xl font-semibold'>
            Create Review
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
                    <FormLabel>User Image</FormLabel>
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
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type Your Name'
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
                name='profession'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Proffesion</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type Your Proffesion'
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
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Type description'
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

export default CreateReviewComponent;
