import { useRouter } from 'next/router';
import { useEffect } from 'react';
import cookies from 'js-cookie';
import Cookies from 'js-cookie';

export default function IfAuth() {
    const router = useRouter();
    const auth = cookies.get('Autenticado');

    useEffect(() => {
        if (auth !== 'True') {
            // User is not logged in, redirect to another page
            router.push('/loginPag');
        }
    }, [auth, router]);

    if (auth === null) {
        // Render a loading component or an error message
        return <div>Carregando...</div>;
    }

    // Render your component content here
    return <div>Your component content</div>;
}


