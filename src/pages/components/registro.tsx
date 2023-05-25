import React, { useContext, useEffect, useState } from "react";
import { auth, registrarComEmailESenha } from "@/lib/authentication";
import { useRouter } from "next/router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { usuarios } from "@/lib/controller";

export default function Registro() {

  const [authUser, setAuth]  = useState(false);
  const [name, setName] = useState("");
  const [ra, setRa] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // Estado para controlar se o usuário foi registrado com sucesso
  const router = useRouter();

  useEffect(() => {
    if (authUser) {
      // Usuário já está autenticado, redirecionar para outra página
      router.push("/profilePag");
    }
  }, [authUser, router]);

  const handleRAChange = (event: { target: { value: any } }) => {
    const inputRA = event.target.value;
    const formattedRA = formatRA(inputRA);
    setRa(formattedRA);
  };

  const formatRA = (input: string) => {
    // Remove caracteres não numéricos
    const digitsOnly = input.replace(/\D/g, '');

    // Aplica o padrão "xx.xxxxx-x"
    let formattedRA = '';
    if (digitsOnly.length >= 2) {
      formattedRA += digitsOnly.substring(0, 2);
      if (digitsOnly.length >= 7) {
        formattedRA += '.' + digitsOnly.substring(2, 7);
        if (digitsOnly.length >= 8) {
          formattedRA += '-' + digitsOnly.substring(7, 8);
        }
      } else {
        formattedRA += '.' + digitsOnly.substring(2);
      }
    } else {
      formattedRA = digitsOnly;
    }

    return formattedRA;
  };

  const handleRegister = async () => {
    try {
      // Registrar usuário com email e senha
      await registrarComEmailESenha(name, email, senha, ra);

      // Verificar se o usuário foi registrado no banco de dados
      const q = query(usuarios, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setIsRegistered(true); // Definir o estado para indicar que o registro foi bem-sucedido
        router.push("/profilePag"); // Redirecionar para outra página após o registro
      } else {
        // Usuário não foi registrado no banco de dados
        alert("Falha ao registrar o usuário. Por favor, tente novamente.");
      }
    } catch (error) {
      // Lidar com erros de registro, exibir mensagem de erro, etc.
      alert("Falha ao registrar o usuário. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <div className="border-2 border-black h-screen bg-mauaBrown m-4 rounded-3xl">
        <div className="flex flex-col text-center py-3 sm:p-5">
          <h1 className="text-4xl font-bold mb-6">Registro</h1>
          {isRegistered && <p className="m-auto text-center text-3xl font-bold">Registro realizado com sucesso!</p>}
          <div className="space-y-5 p-4 text-3xl sm:text-2xl sm:m-auto">
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:justify-end">
              <h1 className="font-bold">NOME COMPLETO</h1>
              <input
                placeholder="Nome Completo"
                className=" border-2 border-black shadow-lg w-auto bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                type="text"
                id="fname"
                name="fname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:justify-end">
              <h1 className="font-bold">RA</h1>
              <input
                placeholder="xx.xxxxx-x"
                className=" border-2 border-black shadow-lg bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                type="text"
                id="ra"
                name="ra"
                value={ra}
                onChange={handleRAChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:justify-end">
              <h1 className="font-bold">EMAIL</h1>
              <input
                placeholder="email@example.com"
                className="border-2 border-black shadow-lg bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 sm:justify-end">
              <h1 className="font-bold">SENHA</h1>
              <input
                placeholder="*******"
                className=" border-2 border-black shadow-lg bg-mauaLightBrown font-bold text-center rounded-xl px-4 py-2"
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="m-auto text-center">
              <div className="sm:p-5">
                <button
                  onClick={handleRegister}
                  className="border-4 border-mauaRed text-5xl bg-mauaYelllowButton rounded-3xl text-white px-4 py-2 font-bold mt-10 text-center align-middle"
                >
                  <h1 className="p-3">Registrar</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
