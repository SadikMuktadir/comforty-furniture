/* eslint-disable react-hooks/set-state-in-effect */
import { currentUser } from '@/services/AuthServices';
import { IUser } from '@/types';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IUserProvidersValue {
  user: IUser | null;
  loading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProvidersValue | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async () => {
    const user = await currentUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [loading]);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error('Use user must be in UserProvider');
  }
  return context;
};

export default UserProvider;
