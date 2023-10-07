'use client'

import useSession from '@/hooks/useSession'
import { GTM_EVENTS } from '@/utils/constants'
import { pushDataLayer } from '@/utils/functions'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const gifs = {
  success: 'well-done',
  fail: 'you-make-patrick-crying'
}

const PageFinish = () => {
  const { session, resetSession } = useSession()
  const result = session.points === 6
  const wasGameFinishEventDispatched = useRef(false)

  const handleStartOverClick = () => {
    resetSession(true)

    pushDataLayer(GTM_EVENTS.GAME_RESTART, {
      session
    })
  }

  useEffect(() => {
    if (!wasGameFinishEventDispatched.current) {
      pushDataLayer(GTM_EVENTS.GAME_FINISH, {
        session,
        won: result
      })

      wasGameFinishEventDispatched.current = true
    }
  }, [])

  return (
    <div className="w-full p-4 flex flex-col justify-center">
      <p className="text-center text-2xl font-bold">
        <span className="green_gradient">{session.name}</span>
        &nbsp; obtuviste un puntaje de:
        <br />
        <span className="green_gradient text-4xl">{session.points}/6 Puntos</span>
      </p>
      <div className="w-full mt-3 container-result__images">
        <Image
          alt="result game"
          width={150}
          height={200}
          src={`/images/${result ? gifs.success : gifs.fail}.gif`}
          className="block mx-auto w-auto"
        />
        <Image
          alt="como votar"
          width={200}
          height={200}
          src="/images/how-to-vote.png"
          className="block mx-auto w-auto mt-5"
        />
      </div>
      <button
        className="mt-3 mx-auto block text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center outline-green-300"
        onClick={handleStartOverClick}
      >Empezar de nuevo</button>
    </div>
  )
}

export default PageFinish