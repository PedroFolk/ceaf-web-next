import ifAuth from '@/lib/ifAuth';
import Header from './components/header'
import Sele from './components/selecao'
import links from '@/constants';



export default function pagSelecao() {
  ifAuth();
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Sele/>

    </>

  )
}