"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

import StoreProvider from "@/state/redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <StoreProvider>
          {children}
      </StoreProvider>
    </NextThemesProvider>
  )
}
