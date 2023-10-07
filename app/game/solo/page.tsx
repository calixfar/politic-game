'use client'

import FormWichIsRight from '@/components/FormWichIsRight'
import Loader from '@/components/Loader'
import SoloCard from '@/components/SoloCard'
import useGameValidtor from '@/hooks/useGameValidator'
import useRandomCandidatesGenerator from '@/hooks/useRandomCandidatesGenerator'
import useSession from '@/hooks/useSession'
import { GTM_EVENTS } from '@/utils/constants'
import { pushDataLayer } from '@/utils/functions'
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

const PageSoloGame = () => {
  const { incrementAttemps, attemps } = useGameValidtor({ nextStep: '/finish' })
  const { generate, generatedCandidate, isDefaultCandidate } = useRandomCandidatesGenerator()
  const { incrementPoints, session } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const attempsCopy = useRef(attemps)
  const limitAttemptsReached = attemps >= 6
  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null)

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance
  }, [])

  const fireConfetti = () => {
    if (!refAnimationInstance.current) {
      return
    }

    refAnimationInstance.current({
      particleCount: 100,
      spread: 120,
      ticks: 100
    })
  }

  const handleSelectButton = (selection: boolean) => {
    let isRightSelection = false

    if ((isDefaultCandidate && selection) || (!isDefaultCandidate && !selection)) {
      fireConfetti()
      incrementPoints()
      isRightSelection = true
    }
    
    pushDataLayer(GTM_EVENTS.GAME_SELECTION, {
      session,
      attemps,
      selected_option: generatedCandidate,
      is_right_selection: isRightSelection
    })
    incrementAttemps()
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
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  )
}

export default PageSoloGame