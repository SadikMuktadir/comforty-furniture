import { z } from 'zod';

export const registrationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' })
    .max(50, { message: 'Name must be at least 3 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(100, { message: 'Password must be less than 100 characters' }),
});
