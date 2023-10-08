'use client'

import ReactDOM from 'react-dom'
import { PropsWithChildren } from 'react'

export const Portal = ({ children }: PropsWithChildren) => {
  const body = window?.document?.body

  if (!body) {
    return null
  }

  return ReactDOM.createPortal(children, body)
}
