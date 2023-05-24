import Header from './components/header'
import { links } from '../constants'
import React, {  useEffect } from "react";
import  Profile  from './components/profile';
import { useRouter } from 'next/router';
import cookies from 'js-cookie'
import Footer from './components/footer';

export default function ProfilePag() {
    const router = useRouter();


    const auth = cookies.get('Autenticado')
    console.log(auth)

    useEffect(() => {
        // console.log("AA", authUser)
        if (auth !== "True" ) {
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
            <Profile />
            <Footer/>
        </>

    )
}
