import Header from './components/header';
import { links, reserva } from '../constants';
import  Reservas  from './components/reservas';
import ifAuth from '@/lib/ifAuth';
import ReservasAdm from './components/adminReservas';

export default function PagReservas() {
    ifAuth();

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <Reservas reserva={[]}  />
            <ReservasAdm reserva={[]}  />

        </>
    );
}
