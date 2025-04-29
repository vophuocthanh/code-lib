import { create } from 'zustand'

interface ExamplesState {
  activeCategory: string
  setActiveCategory: (category: string) => void
  activeTab: string | null
  setActiveTab: (tab: string | null) => void
}

export const useExamplesStore = create<ExamplesState>((set) => ({
  activeCategory: 'All',
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  activeTab: null,
  setActiveTab: (activeTab) => set({ activeTab })
}))
