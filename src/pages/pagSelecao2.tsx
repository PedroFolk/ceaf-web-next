import Header from './components/header'
import DateSel from './components/selecao2'
import {links, date, hora} from '../constants'


export default function pagSelecao() {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <DateSel date={date} hora={hora} />
            
        </>

    )
}