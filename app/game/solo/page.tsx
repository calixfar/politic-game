'use client'

import FormWichIsRight from '@/components/FormWichIsRight'
import Loader from '@/components/Loader'
import SoloCard from '@/components/SoloCard'
import useGameValidtor from '@/hooks/useGameValidator'
import useRandomCandidatesGenerator from '@/hooks/useRandomCandidatesGenerator'
import useSession from '@/hooks/useSession'
import { useEffect, useRef, useState } from 'react'

const PageSoloGame = () => {
  const { validateAnwser, incrementAttemps, attemps } = useGameValidtor({ nextStep: '/finish' })
  const { generate, generatedCandidate, isDefaultCandidate } = useRandomCandidatesGenerator()
  const { incrementPoints, session } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const attempsCopy = useRef(attemps)
  const limitAttemptsReached = attemps >= 6

  const handleSelectButton = (selection: boolean) => {
    if (isDefaultCandidate) {
      validateAnwser(generatedCandidate)

      return
    }

    incrementAttemps()

    if (!selection) {
      incrementPoints()
    }
  }

  useEffect(() => {
    if (attemps !== attempsCopy.current && !limitAttemptsReached) {
      attempsCopy.current = attemps

      generate()
    }
  }, [attemps])

  if (!generatedCandidate || !session.name) {
    return <></>
  }

  const showloader = limitAttemptsReached || isLoading

  return (
    <div className="w-full">
      <div className="w-full flex justify-center" style={{display: showloader ? 'block' : 'none'}}>
        <Loader />
      </div>
      <div className="w-full" style={{display: showloader ? 'none' : 'block'}}>
        <SoloCard
          imageUrl={`/images/${generatedCandidate.logo}.png`}
          number={generatedCandidate.number}
          setIsLoading={setIsLoading}
        />
        <FormWichIsRight onSelectButton={handleSelectButton} />
      </div>
    </div>
  )
}

export default PageSoloGame