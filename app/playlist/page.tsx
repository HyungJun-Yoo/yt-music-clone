import React from 'react'

interface PageProps {
  searchParams: {
    list: string
  }
}

const Page = ({ searchParams }: PageProps) => {
  return <div>playlist {searchParams.list}</div>
}

export default Page
