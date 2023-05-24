import Header from './components/header'
import {links} from '../constants'
import Registro from './components/registro'


export default function registroPag() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <Registro/>
        </>

    )
}
