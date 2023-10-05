'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Props {
  imageUrl: string
  number: number
  width?: number
  height?: number
  setIsLoading: (value: boolean) => void
}

const SoloCard = ({
  imageUrl,
  number,
  width = 300,
  height = 200,
  setIsLoading
}: Props) => {
  const imageUrlCopy = useRef(imageUrl)

  useEffect(() => {
    if (imageUrl !== imageUrlCopy.current) {
      imageUrlCopy.current = imageUrl
      setIsLoading(true)
    }
  }, [imageUrl])

  return (
    <div className="flex justify-between border-2 border-gray-400 rounded p-4 max-w-full h-full" style={{height: `${height}px`}}>
      <Image
        alt="candidate-logo"
        src={imageUrl}
        className="w-1/2 h-full block"
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <p className="font-bold text-gray-600 w-1/2 flex items-center justify-center" style={{fontSize: `${height / 2}px`}}>{number}</p>
    </div>
  )
}

export default SoloCard