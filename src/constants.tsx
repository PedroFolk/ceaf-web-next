import cookies from 'js-cookie'
import router from "next/router";
import { useEffect } from 'react';

export let links = [
  { name: "Inicio", link: "/" },
  { name: "Reservas", link: "/PagReservas" },
  { name: "Regras", link: "/regrasPage" },
  { name: "Entrar", link: "/loginPag" },

];

export function LinkLogado() {
  const auth = cookies.get('Autenticado')


  useEffect(() => {
    // console.log("AA", authUser)
    if (auth == "True") {
      links = [
        { name: "Inicio", link: "/" },
        { name: "Reservas", link: "/PagReservas" },
        { name: "Regras", link: "/regrasPage" },
        { name: "Perfil", link: "/profilePag" },
      ]
    }
    else if (auth == "False") {
      links = [
        { name: "Inicio", link: "/" },
        { name: "Reservas", link: "/PagReservas" },
        { name: "Regras", link: "/regrasPage" },
        { name: "Entrar", link: "/loginPag" },

      ];
    }
  }, [auth, router]);

  if (auth === null) {
    // Renderizar um componente de carregamento ou uma mensagem de erro
    return <div>Carregando...</div>;
  }

}


export const date = [
  { sem: "Seg", dia: "08/05"},
  { sem: "Ter", dia: "09/05"},
  { sem: "Qua", dia: "10/05" },
  { sem: "Qui", dia: "11/05" },
  { sem: "Sex", dia: "12/05" },
  { sem: "Sab", dia: "13/05" },

]

export const hora = [
  { hora: "09:00"},
  { hora: "10:00"},
  { hora: "11:00"},
  { hora: "12:00"},
  { hora: "13:00"},
  { hora: "14:00"},
  { hora: "15:00"},
  { hora: "16:00"},
  { hora: "17:00"},

]


export const esportes = [
  { value: "futebol", label: "Futebol" },
  { value: "basquete", label: "Basquete" },
  { value: "tenis", label: "Tênis" },
  { value: "volei", label: "Volei" },

];

export const pessoas = [
  { value: "3", label: "3 pessoas" },
  { value: "4", label: "4 pessoas" },
  { value: "5", label: "5 pessoas" },
  { value: "6+", label: "6+ pessoas" },

];

export const quadras = [
  { value: "quadra1", label: "Quadra 1" },
  { value: "quadra2", label: "Quadra 2" },
  { value: "quadra3", label: "Quadra 3" },
];


export class name {
  private test: string = "Confirmar";

  setMyTest(test: string) {
    this.test = test;
  }
  getMyTest() {
    return this.test;
  }

  info(): string {
    return `${this.test}`;
  }

}

export default links;
