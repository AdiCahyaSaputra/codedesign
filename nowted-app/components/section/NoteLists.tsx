import React from 'react'
import Container from '../reusable/Container'
import NoteCard from '../reusable/NoteCard'

const notes = [
  {
    title: 'My Goals for the Next Year',
    date: '31/12/2022',
    shortDesc: 'As the year comes to a ...',
    active: false
  },
  {
    title: 'Reflection on the Month of June',
    date: '21/06/2022',
    shortDesc: 'It\'s hard to believe that ...',
    active: true
  },
  {
    title: 'My Favorite Memories from Childhood',
    date: '11/04/2022',
    shortDesc: 'I was reminiscing about ...',
    active: false
  },
  {
    title: 'Reflections on My First Year of College',
    date: '08/04/2022',
    shortDesc: 'It\'s hard to believe that ...',
    active: false
  },
  {
    title: 'My Experience with Meditation',
    date: '24/03/2022',
    shortDesc: 'I\'ve been trying to ...',
    active: false
  },
  {
    title: 'Thoughts on the Pandemic',
    date: '01/02/2021',
    shortDesc: 'It\'s hard to believe that ...',
    active: false
  },
  {
    title: 'My Favorite Recipes',
    date: '08/01/2021',
    shortDesc: 'I love cooking and trying ...',
    active: false
  },
]

const NoteLists: React.FC = () => {
  return (
    <aside className='overflow-y-auto sticky top-0 h-screen col-span-3 bg-[#1c1c1c] py-8 no-scrollbar'>
      <Container>
        <h1 className='text-2xl font-semibold'>Personal</h1>

        <ul className='mt-8 space-y-5'>
          {notes.map((note, index) => (
            <NoteCard {...note} key={index}/>
          ))}
        </ul>

      </Container>
    </aside>
  )
}

export default NoteLists
