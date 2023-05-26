/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from "react";
import { PropsWithChildren, useState } from "react";

interface UserContextProps {
  name: string;
  setName: (n: string) => void;
  location: string;
  setLocation: (n: string) => void;
}

export const UserContext = React.createContext<UserContextProps>({
  name: "",
  setName: (_n: string) => {},
  location: "",
  setLocation: (_n: string) => {},
});

export function UserProvider({ children }: PropsWithChildren) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (name === "" && location === "") {
      const localName = localStorage.getItem("fila-sus-name");
      const localLocation = localStorage.getItem("fila-sus-location");

      if (localName && localLocation) {
        setName(localName);
        setLocation(localLocation);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fila-sus-name", name);
    localStorage.setItem("fila-sus-location", location);
  }, [name, location]);

  return (
    <UserContext.Provider value={{ name, setName, location, setLocation }}>
      {children}
    </UserContext.Provider>
  );
}
