import Header from './components/header';
import { links } from '../constants';
import { Reservas } from './components/reservas';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import cookies from 'js-cookie'

export default function PagReservas() {
    const router = useRouter();
    const auth = cookies.get('Autenticado')


    useEffect(() => {
        // console.log("AA", authUser)
        if (auth != "True") {
                // Usuário não está logado, redirecionar para outra página
                router.push('/loginPag');
            
        }
    }, [auth, router]);

    if (auth === null) {
        // Renderizar um componente de carregamento ou uma mensagem de erro
        return <div>Carregando...</div>;
    }

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <Reservas />
        </>
    );
}
