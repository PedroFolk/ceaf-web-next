import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function IfAuthAdmin() {
    const router = useRouter();
    const auth = Cookies.get('Autenticado');
    const admin = Cookies.get('admin');


    useEffect(() => {
        if (auth !== 'True' || admin !== 'True') {
            // User is not logged in or not an admin, redirect to the login page
            router.push('/');
        }
    }, [auth, admin, router]);

    if (auth === null) {
        // Render a loading component or an error message
        return <div>Loading...</div>;
    }

    // Render your component content here
    return <div>Your component content</div>;
}
