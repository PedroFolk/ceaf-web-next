import Header from './components/header'
import Regras from './components/regras'
import {links, linksLog} from './components/constants'



export default function regrasPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links} linksLog={linksLog}/>

      <Regras/>
    </>

  )
}
