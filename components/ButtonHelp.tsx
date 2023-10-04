'use client'

import { useState } from 'react'

const ButtonHelp = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ seenModalTimes, setSeenModalTimes ] = useState(0)

  const handleClick = () => {
    setIsModalOpen(true)
    setSeenModalTimes((previous) => previous  + 1)
  }

  return (
    <>
      <button 
        onClick={handleClick}
        className="font-bold border-b-2 border-b-green-500 text-green-500 hover:border-b-green-600 hover:text-green-600 outline-none"
      >Ayuda?</button>
    </>
  )
}

export default ButtonHelp