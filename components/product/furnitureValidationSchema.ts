import { z } from 'zod';

export const furnitureValidationSchema = z.object({
  image: z
    .instanceof(File, { message: 'Image is required' })
    .refine((file) => file.size > 0, 'Image is required'),
  name: z.string().min(1, 'Furniture name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be greater than 0'),
});

export type FurnitureFormData = z.infer<typeof furnitureValidationSchema>;
