import React from 'react'
import Header from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Header>{children}</Header>
}

export default Layout
