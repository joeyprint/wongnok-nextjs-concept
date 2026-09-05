"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type UserProfileContextType = {
  setUserProfile: Dispatch<SetStateAction<UserProfileContextType>>;
  userProfile: {
    name: string;
    surname: string;
    tel: string;
    email: string;
  };
};

export const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType,
);

type UserProfileProviderProps = {
  children: React.ReactNode;
};

const UserProfileProvider = (props: UserProfileProviderProps) => {
  const [userProfile, setUserProfile] = useState<UserProfileContextType>({
    name: "Wasin",
    surname: "Wachirapusitanun",
    tel: "0987654321",
    email: "wasin@example.com",
  });

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {props.children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context)
    throw new Error("useUserProfile must be used in UserProfileProvider");
  return context;
};

export default UserProfileProvider;
