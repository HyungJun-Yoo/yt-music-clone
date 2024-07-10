'use client'
import React from 'react'
import useUIState from '@/hooks/useUIState'
import { homeCategoryList } from '@/lib/dummyData'
import { cn } from '@/lib/utils'

const Category = () => {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState()

  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc('')
      setHomeCategory('')
    } else {
      setHeaderImageSrc(item.src)
      setHomeCategory(item.label)
    }
  }

  return (
    <ul className='flex max-w-full flex-row gap-4 overflow-x-auto pb-4'>
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={() => onClickCategory(item)}
            key={item.label}
            className={cn(
              'flex h-[38px] min-w-fit cursor-pointer items-center justify-center rounded-lg border border-transparent bg-[rgba(144,144,144,0.2)] px-3 hover:bg-[rgba(144,144,144,0.45)]',
              item.label === homeCategory &&
                'bg-white text-black hover:bg-white',
            )}
          >
            {item.label}
          </li>
        )
      })}
    </ul>
  )
}

export default Category
