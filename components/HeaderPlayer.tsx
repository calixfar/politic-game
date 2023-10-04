'use client'

import useSession from "@/hooks/useSession"
import ButtonHelp from './ButtonHelp'

const HeaderPlayer = () => {
  const { session: {name, points} } = useSession()

  return (
    <div className="w-full flex justify-between p-4">
      <p className="font-bold">{name}</p>
      <p className="font-bold"><span className="text-green-500">{points}</span> Puntos</p>
      <ButtonHelp />
    </div>
  )
}

export default HeaderPlayer