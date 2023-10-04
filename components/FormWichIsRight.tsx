


import React from 'react'

interface Props {
  onSelectButton: (option: boolean) => void
}

const FormWichIsRight = ({ onSelectButton }: Props) => {

  return (
    <div className="w-full mt-8">
      <h3 className="text-center green_gradient font-bold text-3xl">Es correcto?</h3>
      <div className="w-full flex justify-between mt-5">
        <button onClick={() => onSelectButton(true)} className="font-bold text-2xl w-1/3 mx-auto block text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center outline-green-300">SI</button>
        <button onClick={() => onSelectButton(false)} className="font-bold text-2xl w-1/3 mx-auto block text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center outline-green-300">NO</button>
      </div>
    </div>
  )
}

export default FormWichIsRight