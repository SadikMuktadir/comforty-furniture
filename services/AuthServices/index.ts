/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const registerUser = async (formData: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const result = await res.json();

    return result;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    const cookiesData = await cookies();
    if (result?.success) {
      cookiesData.set('token', result?.token);
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const currentUser = async () => {
  const token = (await cookies()).get('token')?.value;
  let decodeData = null;
  if (token) {
    decodeData = await jwtDecode(token);
    return decodeData;
  } else {
    return null;
  }
};

export const logOut = async () => {
  (await cookies()).delete('token');
};
