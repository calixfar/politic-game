import InitialForm from '@/components/InitialForm'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Practiquemos Como Votar por
        <br />
        <span className="green_gradient text-center pt-2 block">el MISTER</span>
      </h1>
      <InitialForm />
    </section>
  )
}
