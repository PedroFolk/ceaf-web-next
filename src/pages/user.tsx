import Header from './components/header'
import Cont from './components/cont'
import {links} from '../constants'

function Home() {
  
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <Header links={links}/>
      <Cont />
    </>
  );
}

export default Home;
