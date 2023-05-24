import PagSelecao from "./components/selecao3";

import Header from './components/header'
import {pessoas, quadras, esportes, links} from '../constants'
import ifAuth from "@/lib/ifAuth";


export default function pagSelecao3() {
    ifAuth();
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <PagSelecao pessoas={pessoas} quadras={quadras} esportes={esportes}/>            
        </>

    )
}
