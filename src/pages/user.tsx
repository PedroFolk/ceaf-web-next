import Header from './components/header'
import Cont from './components/cont'

const links = [
  { name: "Inicio", link: "/user" },
  { name: "Reservas", link: "/reservas" },
  { name: "Regras", link: "/regras" },
  { name: "Perfil", link: "/perfil" },
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
