import { Inter } from 'next/font/google'
import Header from './components/header'
import Cont from './components/cont'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header />
      <Cont />
    </>

  )
}
