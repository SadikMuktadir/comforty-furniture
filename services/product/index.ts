'use server';
import { cookies } from 'next/headers';

export const createFurnitureData = async (data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/create-furniture`,
      {
        method: 'POST',
        headers: {
          Authorization: (await cookies()).get('token')!.value,
        },
        body: data,
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllFurniture = async () => {
  try {
    const token = (await cookies()).get('token')?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/all-furniture`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching furniture: ${res.statusText}`);
    }

    const result = await res.json();

    return Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error('Failed to fetch furniture:', error);
    return [];
  }
};
