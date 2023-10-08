'use client'

import { useState } from 'react'
import ModalHelp from './ModalHelp'
import SoloCard from './SoloCard'
import { GTM_EVENTS, defaultCandidate } from '@/utils/constants'
import { pushDataLayer } from '@/utils/functions'
import useSession from '@/hooks/useSession'

const ButtonHelp = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ seenModalTimes, setSeenModalTimes ] = useState(0)
  const { session } = useSession()

  const handleClick = () => {
    setIsModalOpen(true)
    pushDataLayer(GTM_EVENTS.GAME_HELP, {
      session,
      first_help: seenModalTimes === 0
    })
  }
  
  const handleClose = () => {
    setIsModalOpen(false)
    setSeenModalTimes((previous) => previous  + 1)
  }

  return (
    <>
      <button 
        onClick={handleClick}
        className="font-bold border-b-2 border-b-green-500 text-green-500 hover:border-b-green-600 hover:text-green-600 outline-none"
      >Ayuda?</button>
      {isModalOpen && (
        <ModalHelp onClose={handleClose}>
          <div className="w-full">
            {!seenModalTimes ? (
              <>
                <p className="mb-4">Recuerda que para votar por tu candidato debes marcar de la siguiente forma</p>
                <SoloCard
                  imageUrl={`/images/${defaultCandidate.logo}.png`}
                  number={defaultCandidate.number}
                />
              </>
            ): (
              <>
                <p className="text-center text-xl">Has agotado tus ayudas.</p>
              </>
            )}
          </div>
        </ModalHelp>
      )}
    </>
  )
}

export default ButtonHelp