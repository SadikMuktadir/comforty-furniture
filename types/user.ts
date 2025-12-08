export interface IUser {
  userId: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  iat?: number;
  exp?: number;
}
