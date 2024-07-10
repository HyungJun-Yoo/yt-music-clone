'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import UserIcon from '@/components/UserIcon'
import PagePadding from './PagePadding'
import { FaChromecast } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Logo from './elements/Logo'
import Navigator from './elements/Navigator'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import useUIState from '@/hooks/useUIState'

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='h-full w-[240px]'>
        {/* 로고 */}
        {/* 네비게이션 + 재생목록 */}
        <div className='py-3'>
          <div className='px-3'>
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false)
              }}
            />
            <Navigator />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

const Header = ({ children }) => {
  const { headerImageSrc } = useUIState()

  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const headRef = useRef()

  useEffect(() => {
    const element = headRef.current

    const handleScroll = () => {
      const scrollValue = element?.scrollTop
      setIsScrolled(scrollValue !== 0)
    }

    element?.addEventListener('scroll', handleScroll)

    return () => {
      element?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headRef} className='relative h-full w-full overflow-y-auto'>
      {/* 홈인 경우에만 bgSection */}
      {pathname === '/' && (
        <section className='absolute top-0 w-full'>
          <div className='relative h-[400px] w-full'>
            <Image
              alt='mediaItem'
              className='object-cover'
              fill
              src={
                headerImageSrc ||
                'https://images.unsplash.com/photo-1549272322-2329561092de'
              }
            />
            <div className='absolute top-0 h-[400px] w-full bg-gray-800 opacity-40'></div>
            <div className='absolute top-0 h-[400px] w-full bg-gradient-to-t from-gray-800'></div>
          </div>
        </section>
      )}

      {/* searchSection */}
      <section
        className={cn('sticky left-0 top-0 z-10', isScrolled && 'bg-black')}
      >
        <PagePadding>
          <div className='flex h-[64px] flex-row items-center justify-between'>
            <article className='hidden h-[42px] min-w-[480px] flex-row items-center gap-[16px] rounded-2xl border border-neutral-500 bg-[rgba(0,0,0,.14)] px-[16px] lg:flex'>
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className='h-full w-full bg-transparent'
                placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'
                type='text'
              />
            </article>
            <HeaderDrawer>
              <article className='lg:hidden'>
                <Logo />
              </article>
            </HeaderDrawer>
            <article className='flex flex-row items-center gap-6'>
              <FaChromecast size={26} className='cursor-pointer' />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>

      <section className='relative'>{children}</section>
    </header>
  )
}

export default Header
