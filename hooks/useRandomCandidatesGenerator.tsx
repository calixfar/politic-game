import { useMemo, useState } from "react"

import { defaultCandidate } from "@/utils/constants"
import { CandidateOption, POLITICAL_PARTY } from "@/utils/interfaces"

interface Props {
  interval?: number,
  candidate?: CandidateOption
}

const generateRandomCandidate = () => {
  const politicalPartyKeys = Object.keys(POLITICAL_PARTY) as Array<keyof typeof POLITICAL_PARTY>
  const randomIndex = Math.floor(Math.random() * politicalPartyKeys.length)

  return {
    logo: POLITICAL_PARTY[politicalPartyKeys[randomIndex]],
    number: Math.floor(Math.random() * 16) + 1
  }
}

const useRandomCandidatesGenerator = ({
  candidate = defaultCandidate,
  interval = 3
}: Props = {}) => {
  const [count, setCount] = useState(1)
  const [generatedCandidate, setGeneratedCandidate] = useState<CandidateOption>(generateRandomCandidate())
  console.log({count})

  const generate = () => {
    console.log({ count, interval, validation: count === interval })
    if (count + 1 === interval) {
      setGeneratedCandidate(candidate)
      setCount(1)

      return
    }

    setCount((previous) => previous + 1)
    setGeneratedCandidate(generateRandomCandidate())
  }

  const isDefaultCandidate = useMemo(() => 
    generatedCandidate && 
    generatedCandidate.logo === candidate.logo &&
    generatedCandidate.number === candidate.number, [generatedCandidate, candidate])

  return {
    generatedCandidate,
    isDefaultCandidate,
    generate
  }
}

export default useRandomCandidatesGenerator