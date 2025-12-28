'use server';
import { cookies } from 'next/headers';

export const getAllUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: (await cookies()).get('token')!.value,
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching user: ${res.statusText}`);
    }

    const data = await res.json();

    // Ensure we always return an array
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.log('Failed to fetch user:', error);
    return [];
  }
};
