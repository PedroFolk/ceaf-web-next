import Header from './components/header'
import Cont from './components/cont'

const links = [
  { name: "Inicio", link: "/" },
  { name: "Reservas", link: "/" },
  { name: "Regras", link: "/" },
  { name: "Perfil", link: "/" },
];

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Cont/> 
    </>

  )
}