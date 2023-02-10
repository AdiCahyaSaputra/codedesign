import OpenedNote from '@/components/section/OpenedNote'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <OpenedNote folder='Personal' date='21/06/2022' title='Reflection on the Month of June'>
      <p className='whitespace-pre-line mt-7'>

        It&apos;s hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
        <br className='mt-4' />
        One of the best things that happened was getting promoted at work. I&apos;ve been working really hard and it&apos;s great to see that effort recognized. It&apos;s also exciting to have more responsibility and the opportunity to contribute to the company in a bigger way. I&apos;m looking forward to taking on new challenges and learning as much as I can in my new role.
        <br className='mt-4' />
        I also had a great time on my vacation to Hawaii. The beaches were beautiful and I loved trying all of the different types of Hawaiian food. It was nice to relax and get away from the daily grind for a bit. I&apos;m so grateful to have had the opportunity to take a trip like that.
        <br className='mt-4' />
        On the downside, I feel like I didn&apos;t make as much progress on my fitness goals as I would have liked. I was really busy with work and didn&apos;t make it to the gym as often as I planned. I&apos;m going to try to be more consistent in July and make exercise a higher priority. I know it will be good for my physical and mental health.
        <br className='mt-4' />
        I also had a few rough patches in my relationships this month. I had a couple of misunderstandings with friends and it was hard to navigate those conflicts. But I&apos;m glad we were able to talk things through and move past them. I value my relationships and I want to make sure I&apos;m always working to be a good friend.
        <br className='mt-4' />
        Overall, it was a good month with a mix of ups and downs. I&apos;m looking forward to what July has in store! I&apos;m hoping to make some more progress on my goals and spend quality time with the people I care about.

      </p>
    </OpenedNote>
  )
}

export default Home
