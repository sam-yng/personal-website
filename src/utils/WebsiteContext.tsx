import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type WebsiteContextType = {
  example: string;
  setExample: (example: string) => void;
};

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export const WebsiteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [example, setExample] = useState<string>("");

  const ref = useRef(null);

  const value = useMemo(
    () => ({
      ref,
      example,
      setExample,
    }),
    [ref, example, setExample]
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
