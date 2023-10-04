'use client'

import { PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import useSession from '@/hooks/useSession'
import Loader from './Loader'

const SessionValidator = ({ children }: PropsWithChildren) => {
  const { session } = useSession()
  const pathname = usePathname()
  const { replace } = useRouter()
  const invalidSession = !session.name && pathname !== '/'


  useEffect(() => {
    if (invalidSession) {
      replace('/')
    }
  }, [invalidSession])

  return (
    <div className="w-full">
      {invalidSession ? (
        <Loader />
      ): (
        <>{children}</>
      )}
    </div>
  )
}

export default SessionValidator