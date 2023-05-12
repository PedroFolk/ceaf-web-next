import Header from './components/header'
import Sele from './components/selecaoQuadra'

const links = [
  { name: "Inicio", link: "/" },
  { name: "Reservas", link: "/reservas" },
  { name: "Regras", link: "/regrasPage" },
];


export default function pagSelecao() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Sele/>

    </>

  )
}