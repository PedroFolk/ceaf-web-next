import { getFirestore, collection, query, getDocs, where } from "firebase/firestore";
import Cookies from "js-cookie";
import { app } from "./firebase";
import { useState, useEffect } from "react";
import cookies from "js-cookie";



export const firestore = getFirestore(app);

export const usuarios = collection(firestore, 'usuarios');
export const reservasBD = collection(firestore, 'reservasBD');

const Email = cookies.get('email');
const Nome = Cookies.get('nome')
const Ra = Cookies.get('ra')
const dia = Cookies.get('dia')
const hora = Cookies.get('hora')
const quadra = Cookies.get('quadra')
const esporte = Cookies.get('esporte')
const pessoa = Cookies.get('pessoa')



export const consulta = Email;

export function AllReservas() {
    const [reservas, setReservas] = useState<any[]>([]);

    useEffect(() => {
        const getReservas = async () => {
            try {
                // Replace 'reservasBD' with the appropriate collection reference
                const q = query(reservasBD);
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const reservasData = querySnapshot.docs.map((doc) => doc.data());
                    setReservas(reservasData);
                }
            } catch (error) {
                console.error("Error getting reservas: ", error);
            }
        };

        getReservas();
    }, []);

    return reservas;
}

export function CheckAdminField() {
    const [adminExists, setAdminExists] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const q = query(usuarios, where('email', '==', consulta));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const firstDoc = querySnapshot.docs[0];
                    const data = firstDoc.data();
                    const adminField = data.admin;

                    if (adminField === true) {
                        setAdminExists(true);
                        Cookies.set('admin', 'True');
                    } else {
                        setAdminExists(false);
                        Cookies.set('admin', '');
                    }
                }
            } catch (error) {
                console.error('Error checking admin field: ', error);
            }
        };

        checkAdmin();
    }, []);

    return null; // Since this function is used for side effects, it doesn't need to return JSX
}

export function EmailUser() {

    const [email, setTestado] = useState(cookies.get('email') || '');
    useEffect(() => {
        const getUsers = async () => {
            try {
                const q = query(usuarios, where('email', '==', consulta));
                const querySnapshot = await getDocs(q);
                console.log(q);
                if (!querySnapshot.empty) {
                    const firstDoc = querySnapshot.docs[0];
                    const data = firstDoc.data();
                    setTestado(data.email);
                }
            } catch (error) {

                console.error('Error getting users: ', error);
            }
        };
        getUsers();
    }, []);

    return email ? email.toString() : '';
}


export function NameUser() {
    const [name, setName] = useState(cookies.get('nome') || '');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const q = query(usuarios, where('email', '==', consulta));
                const querySnapshot = await getDocs(q);
                console.log(q);
                if (!querySnapshot.empty) {
                    const firstDoc = querySnapshot.docs[0];
                    const data = firstDoc.data();
                    setName(data.name);
                }
            } catch (error) {
                console.error('Error getting users: ', error);
            }
        };
        getUsers();
    }, []);
    cookies.set('nome', name ? name.toString() : '');
    return name ? name.toString() : '';
}



export function RaUser() {
    const [ra, setRA] = useState(cookies.get('ra') || '');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const q = query(usuarios, where('email', '==', consulta));
                const querySnapshot = await getDocs(q);
                console.log(q);
                if (!querySnapshot.empty) {
                    const firstDoc = querySnapshot.docs[0];
                    const data = firstDoc.data();
                    setRA(data.ra);
                }
            } catch (error) {
                console.error('Error getting users: ', error);
            }
        };
        getUsers();
    }, []);
    cookies.set('ra', ra ? ra.toString() : '');
    return ra ? ra.toString() : '';
}
