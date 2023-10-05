'use client'

import { FormEvent } from "react"
import { useRouter } from 'next/navigation'

import useSession from "@/hooks/useSession"

const InitialForm = () => {
  const { changeSessionState } = useSession()
  const router = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { name } = {...Object.fromEntries(new FormData(event.target as HTMLFormElement))} as { name: string }

    if (!name) {
      alert('Por favor ingresa un nombre')

      return
    }

    changeSessionState({ name })
    router.push('/game/solo')
  }

  return (
    <form 
      className="w-5/6 pt-6 flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input 
        id="name"
        name="name"
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 outline-green-600"
        placeholder="Ingresa tu nombre" 
      />
      <button 
        type="submit"
        id="form-initial"
        className="mt-3 mx-auto block text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center outline-green-300"
      >COMENZAR!</button>
    </form>
  )
}

export default InitialForm