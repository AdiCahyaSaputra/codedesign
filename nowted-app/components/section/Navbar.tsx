import React from 'react'
import Container from '../reusable/Container'
import Image from 'next/image'
import Logo from '@/asset/image/logo.png'
import { ArchiveBoxIcon, DocumentTextIcon, FolderIcon, FolderOpenIcon, FolderPlusIcon, MagnifyingGlassIcon, PlusIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline'
import { cva } from 'class-variance-authority'

const recentItemCVA = cva('py-2 cursor-pointer', {
  variants: {
    intent: {
      active: 'bg-[#312eb5]',
      deactive: 'hover:bg-[#312eb5]/60'
    }
  },
  defaultVariants: {
    intent: 'deactive'
  }
})

const anotherItemCVA = cva('py-2 cursor-pointer', {
  variants: {
    intent: {
      active: 'bg-white/[3%]',
      deactive: 'hover:bg-white/[3%]'
    }
  },
  defaultVariants: {
    intent: 'deactive'
  }
})

const recents = [
  {
    link: '',
    text: 'Reflection on the Month of June'
  },
  {
    link: '',
    text: 'Project proposal'
  },
  {
    link: '',
    text: 'Travel itinerary'
  },
]

const folders = [
  {
    link: '',
    text: 'Personal'
  },
  {
    link: '',
    text: 'Work'
  },
  {
    link: '',
    text: 'Travel'
  },
  {
    link: '',
    text: 'Events'
  },
  {
    link: '',
    text: 'Finances'
  },
]

const moreItems = [
  {
    link: '',
    text: 'Favorites',
    icon: <>
      <StarIcon className='w-4 aspect-square' />
    </>
  },
  {
    link: '',
    text: 'Trash',
    icon: <>
      <TrashIcon className='w-4 aspect-square' />
    </>
  },
  {
    link: '',
    text: 'Archived Notes',
    icon: <>
      <ArchiveBoxIcon className='w-4 aspect-square' />
    </>
  },
]

const Navbar: React.FC = () => {
  return (
    <nav className='sticky top-0 h-screen col-span-3 overflow-y-auto py-8 no-scrollbar'>

      <Container>

        <div className='flex items-center justify-between'>
          <Image
            src={Logo}
            alt='Nowted Logo'
            placeholder='blur'
          />
          <MagnifyingGlassIcon className='w-5 stroke-white/60 aspect-square cursor-pointer' />
        </div>

        <button className='flex justify-center space-x-2 py-2 px-4 mt-8 bg-white/10 hover:bg-white/[5%] w-full'>
          <PlusIcon className='w-4 aspect-square' />
          <span className='font-semibold'>New Note</span>
        </button>

      </Container>

      <h3 className='px-5 text-sm font-semibold text-white/60 mt-8'>Recents</h3>

      <ul className='mt-2'>

        {recents.map((recent, index) => (
          <li key={index} className={recentItemCVA({ intent: index === 0 ? 'active' : 'deactive' })}>
            <a className='flex items-center space-x-2 px-5'>

              <DocumentTextIcon className='w-4 aspect-square' />
              <span className='font-semibold'>{recent.text}</span>

            </a>
          </li>
        ))}

      </ul>

      <div className='px-5 flex items-center justify-between mt-8'>

        <h3 className='text-sm font-semibold text-white/60'>Folders</h3>
        <FolderPlusIcon className='w-5 cursor-pointer aspect-square' />

      </div>

      <ul className='mt-2'>

        {folders.map((folder, index) => (
          <li key={index} className={anotherItemCVA({ intent: index === 0 ? 'active' : 'deactive' })}>
            <a className='flex items-center space-x-2 px-5'>

              {index === 0 ? (
                <FolderOpenIcon className='w-4 aspect-square' />
              ) : (
                <FolderIcon className='w-4 aspect-square' />
              )}
              <span className='font-semibold'>{folder.text}</span>

            </a>
          </li>
        ))}

      </ul>

      <h3 className='px-5 text-sm font-semibold text-white/60 mt-8'>More</h3>

      <ul className='mt-2'>

        {moreItems.map((more, index) => (
          <li key={index} className={anotherItemCVA({ intent: 'deactive' })}>
            <a className='flex items-center space-x-2 px-5'>

              {more.icon}
              <span className='font-semibold'>{more.text}</span>

            </a>
          </li>
        ))}

      </ul>

    </nav>
  )
}

export default Navbar
