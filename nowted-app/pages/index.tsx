import { NextPage } from 'next'
import { CalendarDaysIcon, ChevronDownIcon, EllipsisHorizontalCircleIcon, FolderIcon, LinkIcon, PhotoIcon, TableCellsIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import Bold from '@/asset/svg/bold.svg'
import Italic from '@/asset/svg/italic.svg'
import Underline from '@/asset/svg/underline.svg'

const Home: NextPage = () => {
  return (
    <main className='p-12'>

      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Reflection on the Month of June</h1>
        <EllipsisHorizontalCircleIcon className='w-8 aspect-square stroke-white/60 cursor-pointer' />
      </div>

      <div className='py-7'>

        <div className='grid grid-cols-12 gap-2 pb-4 mb-4 border-b-2 border-white/10'>

          <div className='flex items-center space-x-4 col-span-3'>
            <CalendarDaysIcon className='w-4 aspect-square stroke-white/60' />
            <p className='text-sm text-white/60'>Date</p>
          </div>

          <p className='underline text-sm'>21/06/2022</p>

        </div>

        <div className='grid grid-cols-12 gap-2'>

          <div className='flex items-center space-x-4 col-span-3'>
            <FolderIcon className='w-4 aspect-square stroke-white/60' />
            <p className='text-sm text-white/60'>Folder</p>
          </div>

          <p className='underline text-sm'>Personal</p>

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

      <p className='whitespace-pre-line mt-7'>

        It&apos;s hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
        <br className='mt-4'/>
        One of the best things that happened was getting promoted at work. I&apos;ve been working really hard and it&apos;s great to see that effort recognized. It&apos;s also exciting to have more responsibility and the opportunity to contribute to the company in a bigger way. I&apos;m looking forward to taking on new challenges and learning as much as I can in my new role.
        <br className='mt-4'/>
        I also had a great time on my vacation to Hawaii. The beaches were beautiful and I loved trying all of the different types of Hawaiian food. It was nice to relax and get away from the daily grind for a bit. I&apos;m so grateful to have had the opportunity to take a trip like that.
        <br className='mt-4'/>
        On the downside, I feel like I didn&apos;t make as much progress on my fitness goals as I would have liked. I was really busy with work and didn&apos;t make it to the gym as often as I planned. I&apos;m going to try to be more consistent in July and make exercise a higher priority. I know it will be good for my physical and mental health.
        <br className='mt-4'/>
        I also had a few rough patches in my relationships this month. I had a couple of misunderstandings with friends and it was hard to navigate those conflicts. But I&apos;m glad we were able to talk things through and move past them. I value my relationships and I want to make sure I&apos;m always working to be a good friend.
        <br className='mt-4'/>
        Overall, it was a good month with a mix of ups and downs. I&apos;m looking forward to what July has in store! I&apos;m hoping to make some more progress on my goals and spend quality time with the people I care about.

      </p>

    </main>
  )
}

export default Home
