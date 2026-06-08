'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { Textarea } from '@/components/ui/textarea';

import { useForm } from 'react-hook-form';
import { createReviewData } from '@/services/review';

import {
  Star,
  MessageSquareText,
  User,
  Briefcase,
  ImagePlus,
} from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';

const CreateReviewComponent = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      profession: '',
      image: undefined as unknown as File,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', data.image);
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('profession', data.profession);

      await createReviewData(formData);

      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card
        className="
          w-full max-w-xl
          border border-white/10
          bg-background/60
          backdrop-blur-xl
          shadow-2xl
          rounded-[36px]
        "
      >
        <CardHeader className="text-center space-y-3">
          <div className="flex justify-center">
            <div
              className="
                h-14 w-14
                rounded-full
                bg-[#029fae]/10
                flex items-center justify-center
              "
            >
              <Star className="text-[#029fae]" />
            </div>
          </div>

          <CardTitle className="text-2xl font-bold">
            Share Your Experience
          </CardTitle>

          <p className="text-muted-foreground text-sm">
            Tell others about your furniture experience with us
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Image */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <ImagePlus className="h-4 w-4 text-[#029fae]" />
                        Profile Image
                      </div>
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file =
                            e.target.files?.[0];
                          field.onChange(file);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#029fae]" />
                        Your Name
                      </div>
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Profession */}
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-[#029fae]" />
                        Profession
                      </div>
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder="e.g. Engineer, Student"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex items-center gap-2">
                        <MessageSquareText className="h-4 w-4 text-[#029fae]" />
                        Your Review
                      </div>
                    </FormLabel>

                    <FormControl>
                      <Textarea
                        placeholder="Write your experience..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  h-12
                  bg-[#029fae]
                  hover:bg-[#028896]
                  font-medium
                "
              >
                {loading
                  ? 'Submitting...'
                  : 'Submit Review'}
              </Button>

              {/* Back Home */}
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full mt-2 h-12"
                >
                  Back to Home
                </Button>
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default CreateReviewComponent;