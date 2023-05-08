import React, { createContext, useContext, useMemo, useState } from "react";

export type WebsiteContextType = {
  example: string;
  setExample: (example: string) => void;
};

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export const WebsiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [example, setExample] = useState<string>("");

  const value = useMemo(
    () => ({
      example,
      setExample,
    }),
    [example, setExample]
  );

  return (
    <WebsiteContext.Provider value={value}>{children}</WebsiteContext.Provider>
  );
};

export const useReminders = (): WebsiteContextType => {
  const value = useContext(WebsiteContext);
  if (!value) {
    throw new Error(
      "useReminders can only be called from within a RemindersProvider"
    );
  }
  return value;
};
