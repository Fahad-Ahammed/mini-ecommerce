import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section
      className={`text-black h-[100vh] mt-[50px] lg:mt-[60px] `}
    >
      home page
    </section>
  )
}
