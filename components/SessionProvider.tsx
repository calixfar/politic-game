'use client'

import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useState } from 'react'

export interface Session {
  name: string,
  points: number
}

export interface ISessionContext {
  session: Session,
  changeSessionState: (partialSession: Partial<Session>) => void
  incrementPoints: () => void
  resetSession: (redirectHome?: boolean) => void
}

const INITIAL_STATE = {
  name: '',
  points: 0
}

export const SessionContext = React.createContext<ISessionContext>({} as ISessionContext)

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState({...INITIAL_STATE})
  const { replace } = useRouter()
  

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

  const resetSession = (redirectHome = false) => {
    setSession({...INITIAL_STATE})

    if (redirectHome) {
      replace('/')
    }
  }

  return (
    <SessionContext.Provider value={{
      session,
      changeSessionState,
      incrementPoints,
      resetSession
    }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider