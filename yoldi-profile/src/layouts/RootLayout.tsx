"use client";

import { SWRConfig } from "swr";
import { ReactNode } from "react";

export const RootLayout = ({ children }: { children: ReactNode }) => (
  <SWRConfig
    value={{
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      keepPreviousData: true,
    }}
  >
    {children}
  </SWRConfig>
);
