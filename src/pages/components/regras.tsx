import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"

export default function Cont() {
    return (
        <main>
            <div className="flex flex-col mt-10 ml-5 sm:ml-10 text-sm sm:text-xl">
                <h3 className="">
                    Quadras
                </h3>
                <h4>
                    Regras a serem seguidas na utilização das quadras*:
                </h4>
                <ol className=" list-disc list-inside space-y-2 mt-2">
                    <li> Utilizar roupas adequadas (Proibido jeans/sarja) </li>
                    <li>Utilizar calçados fechados (Proibido chinelos/sandalias/crocs)</li>
                    <li>Necessita mostrar comprovante da reserva </li>
                    <li>Proibido poluição sonora (gritar palavroes, etc)</li>
                    <li>Proibido utilizar material proprio ** </li>
                </ol>
                <p className="mt-5 font-bold text-ellipsis pr-5 text-sm sm:text-xl  ">
                    * Caso haja o descumprimento de qualquer uma das regras acima haveram consequencias disciplinares <br />
                    ** O material a ser utilizado é fornecido na hora
                </p>

            </div>
        </main>
    )
}
