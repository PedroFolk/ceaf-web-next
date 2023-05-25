import  ReservasAdm  from './components/adminReservas';
import Cookies from 'js-cookie';
import  IfAuthAdmin from '@/lib/ifAuthAdmin';

export default function PagReservas() {
    const auth = Cookies.get('Autenticado');
    const admin = "Admin" + Cookies.get('admin');
    console.log(admin)
    console.log(auth)

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <ReservasAdm reserva={[]}  />
        </>
    );
}
