import { useRouter } from 'next/router';
import { useEffect } from 'react';
import cookies from 'js-cookie'


export default function ifAuth() {

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
}