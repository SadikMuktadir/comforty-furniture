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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/all-furniture`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: (await cookies()).get('token')!.value,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching furniture: ${res.statusText}`);
    }

    const data = await res.json();

    // Ensure we always return an array
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.log('Failed to fetch furniture:', error);
    return [];
  }
};
