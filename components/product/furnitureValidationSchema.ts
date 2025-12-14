import { z } from 'zod';

export const furnitureValidationSchema = z.object({
  image: z.any().refine((file) => file instanceof File, {
    message: 'Image is required',
  }),
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),

  description: z
    .string()
    .min(1, { message: 'Description must be at least 1 characters' })
    .max(1000, { message: 'Description must be less than 1000 characters' }),

  price: z
    .number()
    .min(0, { message: 'Price must be a positive number' })
    .optional(),
});
