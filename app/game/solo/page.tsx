'use client'

import FormWichIsRight from '@/components/FormWichIsRight'
import SoloCard from '@/components/SoloCard'
import useGameValidtor from '@/hooks/useGameValidator'
import useRandomCandidatesGenerator from '@/hooks/useRandomCandidatesGenerator'
import useSession from '@/hooks/useSession'
import { useEffect, useRef } from 'react'

const PageSoloGame = () => {
  const { validateAnwser, incrementAttemps, attemps } = useGameValidtor({ nextStep: '/finish' })
  const { generate, generatedCandidate, isDefaultCandidate } = useRandomCandidatesGenerator()
  const { incrementPoints, session } = useSession()
  const attempsCopy = useRef(attemps)

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
    if (attemps !== attempsCopy.current) {
      attempsCopy.current = attemps

      generate()
    }
  }, [attemps])

  if (!generatedCandidate || !session.name) {
    return <></>
  }

  return (
    <div className="w-full">
      <SoloCard
        imageUrl={`/images/${generatedCandidate.logo}.png`}
        number={generatedCandidate.number}
      />
      <FormWichIsRight onSelectButton={handleSelectButton} />
    </div>
  )
}

export default PageSoloGame