import Cookies from 'js-cookie';
import cookies from 'js-cookie';

export default function getAllCookies() {

  console.log(cookies.get('email'))
  console.log(cookies.get('Autenticado'))

  return {}
}

export function removeAllCookies() {
  cookies.remove('email');
  cookies.remove('Autenticado');

  cookies.remove('dia');
  cookies.remove('hora');
  cookies.remove('quadra');
  cookies.remove('esporte');
  cookies.remove('qntPessoa');
  cookies.remove('admin');


}

export function removeCookiesReserva() {
  cookies.remove('dia');
  cookies.remove('hora');
  cookies.remove('quadra');
  cookies.remove('esporte');
  cookies.remove('qntPessoa');

}
export function showAlert(): void {
  const alertDiv = document.createElement("div");
  alertDiv.classList.add(
    "text-center",
    "bg-red-100",
    "border",
    "border-red-400",
    "text-red-700",
    "px-4",
    "py-3",
    "rounded",
    "absolute",
    "fixed",  // Adiciona a classe "fixed" para posicionar o alerta no topo
    "top-16",  // Posiciona o alerta no topo
    "left-96",
    "right-96",
    "shadow-2xl",
    "w-auto"  // Define a largura do alerta como 100% da tela
  );

  const strongElement = document.createElement("strong");
  strongElement.classList.add("font-bold");
  strongElement.textContent = "Erro ";
  alertDiv.appendChild(strongElement);

  const spanElement1 = document.createElement("span");
  spanElement1.classList.add("block", "sm:inline");
  spanElement1.textContent = "Digite o email e aperte o botão novamente!";
  alertDiv.appendChild(spanElement1);

  const spanElement2 = document.createElement("span");
  spanElement2.classList.add("absolute", "top-0", "bottom-0", "right-0", "px-4", "py-3");

  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.classList.add("fill-current", "h-6", "w-6", "text-red-500");
  svgElement.setAttribute("role", "button");
  svgElement.setAttribute("viewBox", "0 0 20 20");

  const titleElement = document.createElementNS("http://www.w3.org/2000/svg", "title");
  titleElement.textContent = "Close";
  svgElement.appendChild(titleElement);

  const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathElement.setAttribute("d", "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z");
  svgElement.appendChild(pathElement);

  spanElement2.appendChild(svgElement);
  alertDiv.appendChild(spanElement2);

  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}
// Exemplo de uso da função
const allMyCookies = getAllCookies();
console.log(allMyCookies);

// cookies.set('adm', '');

// cookies.set('nome', '');
// cookies.set('ra', '');

// cookies.set('dia', '');
// cookies.set('hora', '');

// cookies.set('quadra', '');
// cookies.set('esporte', '');
// cookies.set('qntPessoa', '');

export function cookieController() {
  if (
    cookies.get('quadra') == '',
    cookies.get('esporte') == '',
    cookies.get('ra') == ''
  )
    return (null);
}

