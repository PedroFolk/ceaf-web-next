import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";
import { app } from "./firebase";
import { useEffect, useState } from "react";
import cookies from 'js-cookie'


export const firestore = getFirestore(app);

export const usuarios = collection(firestore, 'usuarios');
export const reservasBD = collection(firestore, 'reservasBD');
const Email = cookies.get('email');

export const consulta = Email;

export function EmailUser() {
    const [email, setTestado] = useState('');
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
    const [name, setName] = useState('');

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

    return name ? name.toString() : '';
}



export function RaUser() {
    const [ra, setRA] = useState('');

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

    return ra ? ra.toString() : '';
}
