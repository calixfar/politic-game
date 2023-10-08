'use client'

import { PropsWithChildren } from 'react'
import { Portal } from './Portal'

interface Props extends PropsWithChildren {
  onClose: () => void
}

const ModalHelp = ({ onClose, children }: Props) => {
  return (
    <Portal>
      <>
        <div 
          className="fixed top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 z-10"
          onClick={onClose} 
        />
        <div className="absolute w-11/12 max-w-lg inset-center bg-white rounded-lg z-50 p-5">
          <p className="text-center text-4xl">Cómo votar?</p>
          <button className="absolute top-2 right-2 bg-transparent text-black font-bold text-2xl" onClick={onClose}>X</button>
          
          <div className="w-11/12 mx-auto mt-4">
            {children}
          </div>
        </div>
      </>
    </Portal>
  )
}

export default ModalHelp