import { app } from "./firebase";

import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

import {
    addDoc,
    collection,
    getFirestore,
    query,
    getDocs,
    where
} from "firebase/firestore"
import { usuarios } from "./controller";
import { useContext } from "react";

const auth = getAuth(app);

const loginComEmailESenha = async (email: string, senha: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        // Login bem-sucedido, você pode realizar outras ações aqui se necessário
        console.log("Login realizado com sucesso:", user);

    } catch (error: any) {
        // Tratamento de erros durante o login
        if (error.code === "auth/user-not-found") {
            console.log("Usuário não encontrado");
        } else if (error.code === "auth/wrong-password") {
            console.log("Senha incorreta");
        } else {
            console.log("Erro durante o login:", error.message);
        }
        throw error; // Rejeitar a Promise para propagar o erro para o chamador
    }
};



const registrarComEmailESenha = async (name: string, email: string, senha: string, ra: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, senha);
        const user = res.user;
        await addDoc(usuarios, {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            ra
        })
    } catch (error) {

    }
}

const recuperarSenha = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Email para recuperação da senha enviado!");
    } catch (error) {

    }
}




const logout = () => {
    console.log("Saiu");
    signOut(auth);
}



export {
    auth,
    loginComEmailESenha,
    registrarComEmailESenha,
    recuperarSenha,
    logout
}