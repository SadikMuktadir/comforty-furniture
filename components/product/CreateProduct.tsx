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
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import {
  FurnitureFormData,
  furnitureValidationSchema,
} from './furnitureValidationSchema';
import { createFurnitureData } from '@/services/product';
import { UploadCloud } from 'lucide-react';

const CreateFurniture = () => {
  const form = useForm({
    resolver: zodResolver(furnitureValidationSchema),
    defaultValues: {
      name: '',
      description: '',
      price: undefined,
      image: undefined as unknown as File,
    },
  });

  const onSubmit = async (data: FurnitureFormData) => {
    const formData = new FormData();

    formData.append('file', data.image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', String(data.price));

    await createFurnitureData(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-gradient-to-br from-[#f0f2f3] to-white dark:from-gray-900 dark:to-gray-950">
      <Card className="w-full max-w-lg rounded-2xl shadow-xl border border-white/10 backdrop-blur-xl bg-white/70 dark:bg-gray-900/60">
        
        {/* Header */}
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-[#272343] dark:text-white">
            Create Furniture
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Add new product to your collection
          </p>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Image Upload */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Furniture Image</FormLabel>

                    <FormControl>
                      <label
                        className="
                          flex flex-col items-center justify-center
                          border-2 border-dashed border-[#029fae]/40
                          rounded-xl p-6 cursor-pointer
                          hover:bg-[#029fae]/5 transition
                        "
                      >
                        <UploadCloud className="h-6 w-6 text-[#029fae]" />
                        <span className="text-sm mt-2 text-muted-foreground">
                          Click to upload image
                        </span>

                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);
                          }}
                        />
                      </label>
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
                    <FormLabel>Furniture Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Luxury Sofa"
                        {...field}
                        className="focus-visible:ring-[#029fae]"
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
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Short product description"
                        {...field}
                        className="focus-visible:ring-[#029fae]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        value={field.value ?? ''}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value === ''
                              ? undefined
                              : Number(e.target.value)
                          )
                        }
                        className="focus-visible:ring-[#029fae]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#029fae] hover:bg-[#028896]"
                >
                  Submit Furniture
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>

            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateFurniture;