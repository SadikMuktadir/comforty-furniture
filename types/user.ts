export interface IUser {
  image: string;
  userId: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  iat?: number;
  exp?: number;
}
