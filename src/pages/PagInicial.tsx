import Header from './components/header'
import Cont from './components/cont'
import { links } from '../constants'
import Footer from './components/footer'
import router, { Router } from 'next/router'
import { useEffect } from 'react'


export function Home() {


  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links} />
      <Cont />
      <Footer />

    </>

  )
}
