import { cva } from 'class-variance-authority'

export const recentItemCVA = cva('py-2 cursor-pointer', {
  variants: {
    intent: {
      active: 'bg-[#312eb5]',
      deactive: 'hover:bg-white/60'
    }
  },
  defaultVariants: {
    intent: 'deactive'
  }
})

export const anotherItemCVA = cva('py-2 cursor-pointer', {
  variants: {
    intent: {
      active: 'bg-white/[3%]',
      deactive: 'hover:bg-white/60'
    }
  },
  defaultVariants: {
    intent: 'deactive'
  }
})
