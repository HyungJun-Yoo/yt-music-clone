import { create } from 'zustand'

const useUIState = create((set) => ({
  homeCategory: '',
  headerImageSrc: 'https://images.unsplash.com/photo-1549272322-2329561092de',
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}))

export default useUIState
