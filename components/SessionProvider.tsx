'use client'

import { useRouter, usePathname } from 'next/navigation'
import React, { PropsWithChildren, useEffect, useState } from 'react'

export interface Session {
  name: string,
  points: number
}

export interface ISessionContext {
  session: Session,
  changeSessionState: (partialSession: Partial<Session>) => void
  incrementPoints: () => void
}

export const SessionContext = React.createContext<ISessionContext>({} as ISessionContext)

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState({
    name: '',
    points: 0
  })

  const { replace } = useRouter()
  const pathname = usePathname()

  const changeSessionState = (partialSession: Partial<Session>) => {
    setSession((previous) => ({
      ...previous,
      ...partialSession
    }))
  }

  const incrementPoints = () => {
    setSession((previous) => ({
      ...previous,
      points: previous.points + 1
    }))
  }

  useEffect(() => {
    if (!session.name && pathname !== '/') {
      replace('/')
    }
  }, [pathname, session.name])

  return (
    <SessionContext.Provider value={{
      session,
      changeSessionState,
      incrementPoints
    }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider