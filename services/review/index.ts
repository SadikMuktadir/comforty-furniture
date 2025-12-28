'use server';
import { cookies } from 'next/headers';

export const createReviewData = async (data: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/create-review`,
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

export const getAllReview = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-review`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: (await cookies()).get('token')!.value,
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching review: ${res.statusText}`);
    }

    const data = await res.json();

    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    console.log('Failed to fetch review:', error);
    return [];
  }
};
