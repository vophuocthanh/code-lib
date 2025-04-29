import { create } from 'zustand'

type BillingPeriod = 'monthly' | 'yearly'

interface PricingState {
  billing: BillingPeriod
  setBilling: (billing: BillingPeriod) => void
}

export const usePricingStore = create<PricingState>((set) => ({
  billing: 'monthly',
  setBilling: (billing) => set({ billing })
}))
