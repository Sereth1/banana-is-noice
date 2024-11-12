import React, { createContext, useContext, useState, ReactNode } from "react";

const MyContext = createContext<{
  link: string | null;
  setLink: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a ShareContext Provider");
  }
  return context;
};

export default function ShareContext({ children }: { children: ReactNode }) {
  const [link, setLink] = useState<string | null>(null);

  return (
    <MyContext.Provider value={{ link, setLink }}>
      {children}
    </MyContext.Provider>
  );
}
