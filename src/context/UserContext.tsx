/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { PropsWithChildren, useState } from "react";

interface UserContextProps {
  name: string;
  setName: (n: string) => void;
  location: string;
  setLocation: (n: string) => void;
}

export const UserContext = React.createContext<UserContextProps>({
  name: "",
  setName: (_n: string) => { },
  location: "",
  setLocation: (_n: string) => { },
});

export function UserProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <UserContext.Provider value={{ name, setName, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
}
