import { Playlist } from '@/types'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import PlayListCard from './PlayListCard'

interface PlayListCarouselProps {
  title: string
  subTitle?: string
  thumbnail?: React.ReactNode
  playListArray?: Playlist[]
}

const PlayListCarousel = ({
  title,
  subTitle,
  thumbnail,
  playListArray,
}: PlayListCarouselProps) => {
  return (
    <div className='w-full'>
      <Carousel>
        <div className='my-2 flex flex-row items-end justify-between'>
          <article className='flex flex-row gap-3'>
            {thumbnail}
            <div className='flex flex-col justify-center'>
              <div>
                {subTitle && <div className='text-neutral-500'>{subTitle}</div>}
              </div>
              <div className='text-[34px] font-bold leading-[34px]'>
                {title}
              </div>
            </div>
          </article>
          <div className='relative left-[-45px]'>
            <div className='absolute bottom-[20px]'>
              <CarouselPrevious className='right-2' />
              <CarouselNext className='left-2' />
            </div>
          </div>
        </div>
        <CarouselContent className='mt-4'>
          {playListArray?.map((playList, index) => {
            return (
              <CarouselItem
                key={index}
                className='md:basis-1/2 lg:basis-1/3 xl:basis-1/5'
              >
                <PlayListCard playList={playList} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default PlayListCarousel
