'use client'

import useSession from '@/hooks/useSession'
import Image from 'next/image'
import React from 'react'

const gifs = {
  success: 'well-done',
  fail: 'you-make-patrick-crying'
}

const PageFinish = () => {
  const { session } = useSession()
  const result = session.points === 6

  return (
    <div className="w-full p-4 flex flex-col justify-center">
      <p className="text-center text-2xl font-bold">
        <span className="green_gradient">{session.name}</span>
        &nbsp; obtuviste un puntaje de:
        <br />
        <span className="green_gradient text-4xl">{session.points} Puntos</span>
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
    </div>
  )
}

export default PageFinish