import { SessionContext } from "@/components/SessionProvider"
import { useContext } from 'react'

const useSession = () => {
  return useContext(SessionContext)
}

export default useSession