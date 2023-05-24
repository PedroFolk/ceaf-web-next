import Header from './components/header'
import DateSel from './components/selecao2'
import {links, date, hora} from '../constants'
import Footer from './components/footer'
import ifAuth from '@/lib/ifAuth';


export default function pagSelecao2() {
    ifAuth();
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <DateSel date={date} hora={hora} />
            <Footer/>
            
        </>

    )
}