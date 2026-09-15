"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface LoadingContextValue {
  isLoadingComplete: boolean;
  completeLoading: () => void;
}

const LoadingContext = createContext<LoadingContextValue>({
  isLoadingComplete: false,
  completeLoading: () => {},
});

export function useLoadingContext() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoadingComplete,
        completeLoading: () => setIsLoadingComplete(true),
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
