import React from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params }: PageProps) => {
  return <div>channel/{params.id}</div>
}

export default Page
