import React from 'react'
import Navbar from '@/components/section/Navbar'
import NoteLists from './NoteLists'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className='relative min-h-screen bg-[#181818] text-white font-ssp grid grid-cols-12'>

      <Navbar/>
      <NoteLists/>

      <div className='col-span-6'>
        {children}
      </div>

    </main>
  )
}

export default Layout
