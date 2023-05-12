import Header from './header'
import { links, date, hora } from '../../constants'

import Link from 'next/link';
import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../img/Quadra2.jpg"
import campo1 from "../img/Campo.jpg"
import copa from "../img/CopaMaua.jpg"

import Image from "next/image"
import ConfirmButton from './confirmButton';


interface SelProps {
    esportes: { esportes: string, selected: boolean }[];
    pessoas: { pessoas: string, selected: boolean }[];
    quadras: { quadras: string, selected: boolean }[];
}

export default function PagSelecao({ esportes = [], pessoas = [], quadras = [] }: SelProps) {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            

            <div className='flex flex-col bg-mauaLightBrown m-4 p-6 rounded-2xl'>
                <div className='flex'>
                    <Image src={quadra1} alt="Quadra1" className=" shadow-md rounded-2xl w-80 h-80 lg:w-auto lg:h-96" />
                    <div className='flex-col flex w-full m-auto ml-32 text-center'>
                        <h1 className='text-5xl font-bold mb-10'>
                            Quadra 1
                        </h1>
                        <p className='text-2xl font-semibold '>
                            Regras a serem seguidas na utilização das quadras*:<br />
                        </p>
                        <ul className='text-left ml-16 mt-4 space-y-1 text-lg list-disc'>
                            <li>Utilizar roupas adequadas (Proibido jeans/sarja)</li>
                            <li>Utilizar calçados fechados (Proibido chinelos/sandalias/crocs)</li>
                            <li>Necessita mostrar comprovante da reserva</li>
                            <li>Proibido poluição sonora (gritar palavroes, etc)</li>
                            <li>Proibido utilizar material proprio **</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 m-auto mt-10'>
                    <p className='text-2xl font-semibold'>
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
                <div className='flex m-auto mt-20 space-x-64'>
                    <div className='flex m-auto space-x-10'>
                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Quadra 1</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {quadras.map((quadras) => (
                                    <option value={quadras.quadras} className='text-left'>
                                        {quadras.quadras}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Esporte</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {esportes.map((esportes) => (
                                    <option value={esportes.esportes} className='text-left'>
                                        {esportes.esportes}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Qnt. Pessoas</label>
                            <select className='bg-mauaRed rounded-3xl text-xl text-center w-40 text-white px-4 py-1'>
                                {pessoas.map((pessoas) => (
                                    <option value={pessoas.pessoas} className='text-center'>
                                        {pessoas.pessoas}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <ConfirmButton />

                </div>
            </div>
        </>

    )
}