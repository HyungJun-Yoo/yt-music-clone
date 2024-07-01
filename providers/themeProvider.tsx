'use client'

import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // 서버에서는 아무 것도 렌더링하지 않음
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
