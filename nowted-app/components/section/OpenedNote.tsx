import React, { useState } from 'react'
import { ArchiveBoxIcon, CalendarDaysIcon, ChevronDownIcon, EllipsisHorizontalCircleIcon, FolderIcon, LinkIcon, PhotoIcon, StarIcon, TableCellsIcon, TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import Bold from '@/asset/svg/bold.svg'
import Italic from '@/asset/svg/italic.svg'
import Underline from '@/asset/svg/underline.svg'

type Props = {
  title: string,
  folder: string,
  date: string,
  children: React.ReactNode
}

const OpenedNote: React.FC<Props> = ({ title, folder, date, children }) => {
  const [active, setActive] = useState(false)

  return (
    <main className='p-12 overflow-x-hidden'>

      <div className='flex items-center justify-between relative'>
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <EllipsisHorizontalCircleIcon onClick={() => setActive(!active)} className='w-8 aspect-square stroke-white/60 cursor-pointer' />
        <div className={`absolute space-y-5 top-14 ${active ? 'right-0' : '-right-full'} transition-all p-4 bg-[#333] w-52 rounded-md`}>

          <div className='flex items-center space-x-4 cursor-pointer'>
            <StarIcon className='w-5 aspect-square' />
            <p>Add to favorites</p>
          </div>

          <div className='flex items-center space-x-4 cursor-pointer'>
            <ArchiveBoxIcon className='w-5 aspect-square' />
            <p>Archieved</p>
          </div>

          <hr className='border border-white/10' />

          <div className='flex items-center space-x-4 cursor-pointer'>
            <TrashIcon className='w-5 aspect-square' />
            <p>Delete</p>
          </div>

        </div>
      </div>

      <div className='py-7'>

        <div className='grid grid-cols-12 gap-2 pb-4 mb-4 border-b-2 border-white/10'>

          <div className='flex items-center space-x-4 col-span-3'>
            <CalendarDaysIcon className='w-4 aspect-square stroke-white/60' />
            <p className='text-sm text-white/60'>Date</p>
          </div>

          <p className='underline text-sm'>{date}</p>

        </div>

        <div className='grid grid-cols-12 gap-2'>

          <div className='flex items-center space-x-4 col-span-3'>
            <FolderIcon className='w-4 aspect-square stroke-white/60' />
            <p className='text-sm text-white/60'>Folder</p>
          </div>

          <p className='underline text-sm'>{folder}</p>

        </div>

      </div>

      <ul className='py-2.5 flex items-center space-x-8 border-y-2 border-white/10'>

        <li>

          <div className='flex items-center space-x-4'>
            <p>Paragraph</p>
            <ChevronDownIcon className='w-4 aspect-square stroke-2 cursor-pointer' />
          </div>

        </li>

        <li>

          <div className='flex items-center space-x-4'>
            <p>16</p>
            <ChevronDownIcon className='w-4 aspect-square stroke-2 cursor-pointer' />
          </div>

        </li>

        <li>

          <div className='flex items-center space-x-2.5'>

            <Image
              src={Bold}
              width={20}
              height={20}
              alt='bold'
              className='cursor-pointer'
            />
            <Image
              src={Italic}
              width={20}
              height={20}
              alt='bold'
              className='cursor-pointer'
            />
            <Image
              src={Underline}
              width={20}
              height={20}
              alt='bold'
              className='cursor-pointer'
            />

          </div>

        </li>

        <li>

          <div className='flex items-center space-x-2.5'>
            <PhotoIcon className='w-6 aspect-square cursor-pointer' />
            <LinkIcon className='w-6 aspect-square cursor-pointer' />
          </div>

        </li>

        <li>
          <TableCellsIcon className='w-6 aspect-square cursor-pointer' />
        </li>

      </ul>

      {children}

    </main>
  )
}

export default OpenedNote
