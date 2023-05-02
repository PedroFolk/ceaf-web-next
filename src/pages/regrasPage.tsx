import Header from './components/header'
import Regras from './components/regras'

const links = [
  { name: "Inicio", link: "/" },
  { name: "Reservas", link: "/reservas" },
  { name: "Regras", link: "/regrasPage" },
  { name: "Entrar", link: "/loginPage" },
];

export default function regrasPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Regras/>
    </>

  )
}
