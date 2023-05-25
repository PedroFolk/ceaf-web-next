import { getFirestore, collection, query, getDocs, where, orderBy } from "firebase/firestore";
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
                const q = query(reservasBD, orderBy('dia', "asc"));
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




export function SuasReservas() {
    const [reservas, setReservas] = useState<any[]>([]);
    const email = cookies.get('email')

    useEffect(() => {
        const getReservas = async () => {
            try {
                const q = query(reservasBD, where("email", "==", email));
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




export async function checkAdminByEmail(email: string): Promise<void> {
    
    const q = query(usuarios, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const isAdmin = data.admin !== undefined ? data.admin : false;
            Cookies.set("adm", 'true');
        });
    } else {
        Cookies.set("adm", "false");
    }
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







export async function getRaByEmail(): Promise<string | null> {
    try {

        const email = cookies.get('email')
        const usersCollection = usuarios; // Substitua 'users' pelo nome da sua coleção

        if (!email) {
            return ''; // Retorna null se o email for undefined ou vazio
        }
        const q = query(usersCollection, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const ra = userDoc.data().ra;
            Cookies.set('ra', ra);
            return ra;
        }

        return ''; // Retornar null se não houver usuário com o email fornecido
    } catch (error) {
        console.error('Error getting RA: ', error);
        throw error;
    }
}


export async function getNameByEmail(): Promise<string | null> {
    try {
        const email = cookies.get('email');

        if (!email) {
            return ''; // Retorna null se o email for undefined ou vazio
        }

        const usersCollection = usuarios; // Substitua 'users' pelo nome da sua coleção

        const q = query(usersCollection, where('email', '==', email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const name = userDoc.data().name;
            Cookies.set('nome', name);
            return name;
        }

        return null; // Retorna null se não houver usuário com o email fornecido
    } catch (error) {
        console.error('Error getting name: ', error);
        throw error;
    }
}








// export function EmailUser() {
//     const [email, setEmail] = useState<any>();

//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 if (consulta) {
//                     const q = query(usuarios, where('email', '==', consulta));
//                     const querySnapshot = await getDocs(q);
//                     if (!querySnapshot.empty) {
//                         const firstDoc = querySnapshot.docs[0];
//                         const data = firstDoc.data();
//                         setEmail(data.email);
//                         cookies.set('email', data.email);
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error getting users: ', error);
//             }
//         };
//         getUsers();
//     }, []);

//     return email ? email.toString() : '';
// }

// export function NameUser() {
//     const [name, setName] = useState<any>();


//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 if (consulta) {
//                     const q = query(usuarios, where('email', '==', consulta));
//                     const querySnapshot = await getDocs(q);
//                     if (!querySnapshot.empty) {
//                         const firstDoc = querySnapshot.docs[0];
//                         const data = firstDoc.data();
//                         setName(data.name);
//                         cookies.set('name', data.name);
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error getting users: ', error);
//             }
//         };
//         getUsers();
//     }, []);
//     return name ? name.toString() : '';
// }

// export function RaUser() {
//     const [ra, setRA] = useState<any>();

//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 if (consulta) {
//                     const q = query(usuarios, where('email', '==', consulta));
//                     const querySnapshot = await getDocs(q);
//                     if (!querySnapshot.empty) {
//                         const firstDoc = querySnapshot.docs[0];
//                         const data = firstDoc.data();
//                         setRA(data.ra);
//                         cookies.set('name', data.ra);
//                     }
//                 }

//             } catch (error) {
//                 console.error('Error getting users: ', error);
//             }
//         };
//         getUsers();
//     }, []);

//     return ra ? ra.toString() : '';
// }
