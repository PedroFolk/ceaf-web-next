export const links = [
  { name: "Inicio", link: "/" },
  { name: "Reservas", link: "/reservas" },
  { name: "Regras", link: "/regrasPage" },
  { name: "Entrar", link: "/" },

];
export const date = [
  { sem: "Seg", dia: "08/05" },
  { sem: "Ter", dia: "09/05" },
  { sem: "Qua", dia: "10/05" },

]

export const hora = [
  { hora: "09:00", selected: false},
  { hora: "10:00", selected: false},
  { hora: "11:00", selected: false},
  { hora: "12:00", selected: false},
  { hora: "13:00", selected: false},
  { hora: "14:00", selected: false},
  { hora: "15:00", selected: false},
  { hora: "16:00", selected: false},

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
  private test:string = "Confirmar" ;

  setMyTest(test:string){
    this.test = test;
  }
  getMyTest(){
    return this.test;
  }

  info():string{
    return `${this.test}`;
  }

}

export default links;
