import PagConfirma from "./components/selecao4";

import Header from './components/header'
import {links} from '../constants'
import ifAuth from "@/lib/ifAuth";


export default function pagSelecao4() {
    ifAuth();
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <PagConfirma />            
        </>

    )
}