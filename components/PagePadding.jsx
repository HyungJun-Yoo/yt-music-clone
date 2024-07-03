import React from 'react'

const PagePadding = ({ children }) => {
  return (
    <div className='mx-auto px-[10px] lg:px-[100px]' py-2>
      {children}
    </div>
  )
}

export default PagePadding
