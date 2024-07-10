'use client'
import Image from 'next/image'
import React from 'react'
import { getRandomElementFromArray } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { MdMoreVert } from 'react-icons/md'
import { FiPlay } from 'react-icons/fi'
import IconButton from './elements/IconButton'

const PlayListCard = ({ playList = {} } = {}) => {
  const { push } = useRouter()
  const { id, owner = '', playlistName = '', songList = [] } = playList ?? {}

  const songListLen = songList?.length
  const imageSrc = getRandomElementFromArray(songList)?.imageSrc

  const onClickCard = () => {
    if (id) push(`/playlist?list=${id}`)
  }

  const onClickPlay = () => {}

  return (
    <article className='group h-[240px] cursor-pointer'>
      <section onClick={onClickCard} className='relative h-[136px]'>
        <Image
          src={
            imageSrc ||
            'https://images.unsplash.com/photo-1549272322-2329561092de'
          }
          alt='thumbnail'
          fill={true}
          className='object-cover'
        />

        <div className='relative top-0 hidden h-[136px] w-full bg-gradient-to-b from-[rgba(0,0,0,0.7)] group-hover:block'>
          <div className='absolute right-4 top-2'>
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className='absolute bottom-4 right-4 flex h-[45px] w-[45px] transform-gpu items-center justify-center rounded-full bg-[rgba(0,0,0,0.7)] pl-[1.5px] transition-transform hover:scale-110 hover:bg-[rgba(0,0,0,0.9)]'
          >
            <FiPlay size={22} color='red' />
          </div>
        </div>
      </section>

      <section className='mt-2'>
        <div>{playlistName}</div>
        <div className='text-neutral-500'>{`${owner} - 트랙 ${songListLen}`}</div>
      </section>
    </article>
  )
}

export default PlayListCard
