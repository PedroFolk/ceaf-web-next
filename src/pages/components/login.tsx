import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, loginComEmailESenha, logout, recuperarSenha } from "@/lib/authentication";
import Link from "next/link";
import cookies from 'js-cookie'
import { removeAllCookies, showAlert } from "@/lib/cookie";


export default function Login() {


    const handleEsqueciSenha = async () => {
        recuperarSenha(email)
        if (!email) {
            showAlert()
            // alert("Digite seu email e clique novamente!")
        }
    }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaIncorreta, setSenhaIncorreta] = useState(false);
    const router = useRouter();

    console.log(cookies.get('email'))
    console.log(cookies.get('Autenticado'))



    







    const handleLogOut = async () => {

        logout()

        removeAllCookies()

    }



    const handleLogin = async () => {
        // Verifica se os campos de email e senha estão preenchidos
        if (email.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos");

            return;
        }

        try {
            // Faz o login com email e senha
            await loginComEmailESenha(email, senha);

            // Usuário existe, redirecionar para outra página

            cookies.set('Autenticado', 'True');
            router.push("/");
        } catch (error) {
            // Tratar erros de login
            console.log("Erro ao fazer login:", error);
            setSenhaIncorreta(true);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        cookies.set('email', value);
    };

    return (
        <>

            <div className=" border-2 border-black bg-mauaBrown m-4 rounded-3xl">
                <div className="flex flex-col divide-y-2 divide-solid divide-gray-500 text-center py-2 p-5">
                    <h1 className="text-5xl font-bold mb-6">Entrar</h1>

                    <div className="space-y-5 p-4 text-3xl sm:text-2xl sm:m-auto">
                        <div className="flex flex-col space-y-2 ">
                            <h1 className="font-bold text-4xl">EMAIL</h1>
                            <input
                                placeholder="email@example.com"
                                className="border-2 border-black shadow-lg bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange} // Use the new handler
                            />
                        </div>
                        <div className="flex flex-col space-y-2 ">
                            <h1 className="font-bold text-4xl">SENHA</h1>
                            <input
                                placeholder="*******"
                                className="border-2 border-black shadow-lg bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                                type="password"
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        {senhaIncorreta && (
                            <p className="text-red-500  m-auto text-center text-lg font-semibold">Senha ou usuario incorretos. Tente novamente.</p>
                        )}

                        <div className="m-auto text-center">
                            <div className="p-5">
                                <button
                                    onClick={handleLogin}
                                    className="text-4xl bg-mauaRed rounded-xl border-4 border-green-500  text-white px-4  font-bold mt-10 text-center align-middle"
                                >
                                    <h1 className="px-4 py-2">Entrar</h1>
                                </button>

                            </div>
                        </div>
                        <div className="m-auto text-center">
                            <div className="">
                                <Link href="/registroPag" className="text-3xl bg-mauaRed rounded-xl border-4 border-yellow-500 text-white px-4 py-2 font-bold mt-6 text-center align-middle">
                                    Registrar-se

                                </Link>
                            </div>
                        </div>
                        <div className="m-auto text-center">
                            <div className="p-5">
                                <button
                                    onClick={handleEsqueciSenha}
                                >
                                    <h1 className="px-4 py-2 text-sm hover:text-blue-500">Esqueci minha senha</h1>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
