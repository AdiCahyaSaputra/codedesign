import React from 'react'
import { cva } from 'class-variance-authority'

const noteCardCVA = cva('p-5 cursor-pointer rounded-md', {
  variants: {
    intent: {
      active: 'bg-white/10',
      deactive: 'bg-white/[3%] hover:bg-white/10'
    }
  },
  defaultVariants: {
    intent: 'deactive'
  }
})

type Props = {
  title: string,
  date: string,
  shortDesc: string,
  active: boolean
}

const NoteCard: React.FC<Props> = ({ title, date, shortDesc, active }) => {
  return (
    <li className={noteCardCVA({ intent: active ? 'active' : 'deactive' })}>

      <h2 className='text-lg font-semibold'>{title}</h2>

      <div className='flex space-x-2 mt-2.5'>

        <p className='text-white/40'>{date}</p>
        <p className='text-white/60 line-clamp-1'>{shortDesc}</p>

      </div>

    </li>
  )
}

export default NoteCard
