import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import {
  storageUserSave,
  storageUserGet,
  storageUserRemove,
} from "@storage/storageUser";
import { storageAuthTokenSave, storageAuthTokenGet } from "@storage/storageAuthToken";

export type AuthContextDataProps = {
  user: UserDTO;
  singIn: (email: string, password: string) => Promise<void>;
  singOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function storageUserAndToken(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser(userData);

    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function singIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        await storageUserSave(data.user);
        await storageAuthTokenSave(data.token);
        storageUserAndToken(data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  async function singOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet()

      if (token && userLogged) {
        setUser(userLogged);

      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        singIn,
        singOut,
        isLoadingUserStorageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
