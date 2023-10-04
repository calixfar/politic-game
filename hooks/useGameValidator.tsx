'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import useSession from "./useSession"
import { CandidateOption } from "@/utils/interfaces"
import { defaultCandidate } from "@/utils/constants"

interface Props {
  totalAttemps?: number
  candidate?: CandidateOption
  nextStep?: string
}

const useGameValidtor = ({ 
  totalAttemps = 6, 
  candidate = defaultCandidate,
  nextStep = '/'
}: Props = {}) => {
  const [attemps, setAttemps] = useState(0)
  const { incrementPoints } = useSession()
  const router = useRouter()

  const incrementAttemps = () => setAttemps((previous) => previous + 1)

  const validateAnwser = (selectedCandidate: CandidateOption) => {
    if (candidate.logo === selectedCandidate.logo && candidate.number === selectedCandidate.number) {
      incrementPoints()
    }
    
    incrementAttemps()
  }

  useEffect(() => {
    if (totalAttemps === attemps) {
      router.push(nextStep)
    }
  }, [attemps])

  return {
    validateAnwser,
    incrementAttemps,
    attemps
  }
}

export default useGameValidtor