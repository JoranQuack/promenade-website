"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface CurrentPageContextType {
  currentPage: string;
}

const CurrentPageContext = createContext<CurrentPageContextType | undefined>(
  undefined
);

export function useCurrentPage(): CurrentPageContextType {
  const context = useContext(CurrentPageContext);

  if (!context) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }

  return context;
}

interface CurrentPageProviderProps {
  children: ReactNode;
}

export function CurrentPageProvider({
  children,
}: CurrentPageProviderProps): React.ReactElement {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("HOME");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrentPage("HOME");
        break;
      case "/about":
        setCurrentPage("ABOUT");
        break;
      case "/music":
        setCurrentPage("MUSIC");
        break;
      case "/events":
        setCurrentPage("EVENTS");
        break;
      case "/contact":
        setCurrentPage("CONTACT");
        break;
      default:
        setCurrentPage("HOME");
    }
  }, [pathname]);

  return (
    <CurrentPageContext.Provider value={{ currentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}
