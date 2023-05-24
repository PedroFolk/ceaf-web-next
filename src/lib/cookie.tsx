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

  cookies.remove('dup');
  
}

// Exemplo de uso da função
const allMyCookies = getAllCookies();
console.log(allMyCookies);


cookies.set('nome', '');
cookies.set('ra', '');

cookies.set('dia', '');
cookies.set('hora', '');

cookies.set('dup', 'dd');

cookies.set('quadra', '');
cookies.set('esporte', '');
cookies.set('qntPessoa', '');


