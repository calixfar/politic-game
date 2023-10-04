import Image from 'next/image'

interface Props {
  imageUrl: string
  number: number
  width?: number
  height?: number
}

const SoloCard = ({
  imageUrl,
  number,
  width = 300,
  height = 200
}: Props) => {
  return (
    <div 
      className="flex justify-between border-2 border-gray-400 rounded p-4 max-w-full"
      style={{height: `${height}px`}}
    >
      <Image
        alt="candidate-logo"
        src={imageUrl}
        className="w-1/2 h-full"
        width={width}
        height={height}
      />
      <p className="font-bold text-gray-600 w-1/2 flex items-center justify-center" style={{fontSize: `${height / 2}px`}}>{number}</p>
    </div>
  )
}

export default SoloCard