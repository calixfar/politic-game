import React, { PropsWithChildren } from 'react'

import HeaderPlayer from '@/components/HeaderPlayer'

const LayoutGame = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full h-screen'>
      <HeaderPlayer />
      <div className="h-5/6 flex flex-col justify-center items-center p-2">
        {children}
      </div>
    </div>
  )
}

export default LayoutGame