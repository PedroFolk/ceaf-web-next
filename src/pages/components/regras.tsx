import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"

export default function Regras() {
    return (
        <main className=" space-y-14 flex flex-col">
            <div>
                <h1 className="  font-bold text-5xl text-center mt-10 ">
                    Regras
                </h1>
            </div>
            <div className=" flex flex-col sm:flex-row sm:space-x-14 m-auto">


                    <ol className=" list-disc list-inside p-2 space-y-2 text-xl ">
                        <li className="list-none text-2xl font-semibold">Regras a serem seguidas na utilização das quadras*:</li>
                        <li>Utilizar roupas adequadas (Proibido jeans/sarja).</li>
                        <li>Utilizar calçados fechados (Proibido chinelos/sandálias/crocs).</li>
                        <li>Necessário apresentar comprovante da reserva.</li>
                        <li>Proibido poluição sonora (gritar palavrões, etc.).</li>
                        <li>Proibido utilizar material próprio**.</li>
                    </ol>
                <div className="flex   ">
                    <ol className=" m-auto font-semibold text-lg bg-mauaBrown p-2 rounded-lg shadow-xl border-2 border-black">
                        <li>
                            * Caso haja o descumprimento de qualquer uma das regras acima, <br/>haverá consequências disciplinares.
                        </li>
                        <li>
                            ** O material a ser utilizado é fornecido na hora.
                        </li>
                    </ol>
                </div>


            </div>
        </main>
    )
}
