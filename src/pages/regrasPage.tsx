import Header from './components/header'
import Regras from './components/regras'
import {links} from '../constants'


export default function regrasPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links} />

      <Regras/>
    </>

  )
}
