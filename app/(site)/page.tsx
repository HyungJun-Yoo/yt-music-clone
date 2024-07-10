import React from 'react'
import Category from './components/Category'
import PagePadding from '@/components/PagePadding'
import PlayListCarousel from '@/components/PlayListCarousel'
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData'
import UserIcon from '@/components/UserIcon'

const Page = async () => {
  const dummyPlaylistData1 = [...dummyPlaylistArray]
  const dummyPlaylistData2 = [await getPlaylistById(1)]
  const dummyPlaylistData3 = [await getPlaylistById(2)]
  const dummyPlaylistData4 = [await getPlaylistById(3)]

  return (
    <PagePadding>
      <div className='min-h-[600px]'>
        <div className='mt-9'></div>
        <Category />
        <div className='mt-12'></div>
        {/* carousel */}
        <PlayListCarousel
          playListArray={[...dummyPlaylistData1]}
          thumbnail={
            <div className='h-[56px] w-[56px]'>
              <UserIcon size={'lg'} />
            </div>
          }
          title='다시 듣기'
          subTitle='도도'
        />

        <div className='mt-20'></div>
        <PlayListCarousel
          playListArray={[...dummyPlaylistData2]}
          title='새로운 하루를 위한 준비'
        />

        <div className='mt-20'></div>
        <PlayListCarousel
          playListArray={[...dummyPlaylistData3]}
          title='추천 앨범'
        />

        <div className='mt-20'></div>
        <PlayListCarousel
          playListArray={[...dummyPlaylistData4]}
          title='추억의 음악'
        />
      </div>
    </PagePadding>
  )
}

export default Page
