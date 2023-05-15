import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../img/Quadra2.jpg"
import campo1 from "../img/Campo.jpg"
import copa from "../img/CopaMaua.jpg"

import Image from "next/image"
import ConfirmButton from './confirmButton';

import { name } from "../../constants"
import { useEffect } from "react"

interface SelProps {
    esportes: { value: string, label: string }[];
    pessoas: { value: string, label: string }[];
    quadras: { value: string, label: string }[];
}

const p = new name();
p.setMyTest("Pedro")



export default function PagSelecao({ esportes = [], pessoas = [], quadras = [] }: SelProps) {


    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


            <div className='flex flex-col bg-mauaLightBrown m-4 p-6 rounded-2xl'>
                <div className='flex flex-col sm:flex-row'>
                    <Image src={quadra1} alt="Quadra1" className=" shadow-md rounded-2xl w-80 h-80 lg:w-auto lg:h-96" />
                    <div className='flex-col flex w-full m-auto  '>
                        <h1 className='text-5xl font-bold mb-10 mt-4 sm:mt-0 m-auto'>
                            Quadra
                        </h1>
                        <p className=' text-xl text-center sm:m-auto sm:text-2xl font-semibold '>
                            Regras a serem seguidas na utilização das quadras*:<br />
                        </p>
                        <ul className='ml-4 sm:m-auto pt-4 space-y-1 text-lg list-disc'>
                            <li>Utilizar roupas adequadas (Proibido jeans/sarja)</li>
                            <li>Utilizar calçados fechados (Proibido chinelos/sandalias/crocs)</li>
                            <li>Necessita mostrar comprovante da reserva</li>
                            <li>Proibido poluição sonora (gritar palavroes, etc)</li>
                            <li>Proibido utilizar material proprio **</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 m-auto mt-3 sm:mt-10'>
                    <p className=' text-center text-xl sm:text-2xl mb-3 font-semibold'>
                        Obs: A montagem das redes de volei só serão realizadas caso haja 6 ou mais jogadores
                    </p>
                    <ul className='text-xl space-y-1'>
                        <li>
                            * Caso haja o descumprimento de qualquer uma das regras acima haveram consequencias disciplinares
                        </li>
                        <li>
                            ** O material a ser utilizado é fornecido na hora
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col sm:flex-row m-auto mt-10 space-y-8 sm:space-x-64'>
                    <div className='flex flex-col sm:flex-row m-auto sm:space-x-10'>
                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Quadra 1</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {quadras.map((quadras) => (
                                    <option key={quadras.label} value={quadras.value} className='text-left'>
                                        {quadras.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Esporte</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {esportes.map((esportes) => (
                                    <option key={esportes.label} value={esportes.value} className='text-left'>
                                        {esportes.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Qnt. Pessoas</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {pessoas.map((pessoas) => (
                                    <option key={pessoas.label} value={pessoas.value} className='text-center'>
                                        {pessoas.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <ConfirmButton rotas="pagSelecao4" />

                </div>
            </div>
        </>

    )
}