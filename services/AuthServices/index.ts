/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

export const registerUser = async (formData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/register-user`,
      {
        method: 'POST',
        body: formData,
        cache: 'no-store',
      }
    );

    const result = await res.json();

    if (result?.success && result?.token) {
      (await cookies()).set('token', result.token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    return result;
  } catch (error: any) {
    console.log(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      cache: 'no-store',
    });
    const result = await res.json();
    const cookiesData = await cookies();
    if (result?.success) {
      cookiesData.set('token', result?.token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      });
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
