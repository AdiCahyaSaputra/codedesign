import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='px-5'>{children}</div>
  )
}

export default Container
