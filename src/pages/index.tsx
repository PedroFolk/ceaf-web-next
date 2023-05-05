import Header from './components/header'
import Cont from './components/cont'
import {links, linksLog} from './components/constants'


export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links} linksLog={linksLog}/>
      <Cont/> 
    </>

  )
}
