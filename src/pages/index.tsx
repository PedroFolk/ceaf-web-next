import Header from './components/header'
import Cont from './components/cont'
import {links} from '../constants'
import Footer from './components/footer'


export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Cont/> 
      <Footer/>
    </>

  )
}
