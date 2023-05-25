import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../img/Campo.jpg"
import copa from "../img/CopaMaua.jpg"
import { SetStateAction, useEffect, useState } from 'react';
import Image, { StaticImageData } from "next/image"
import ConfirmButton from './confirmButton';
import cookies from 'js-cookie'


interface SelProps {
    esportes: { label: string }[];
    pessoas: { label: string }[];
    quadras: { label: string }[];
}




export default function PagSelecao({ esportes = [], pessoas = [], quadras = [] }: SelProps) {



    const [quadra, setQuadra] = useState(cookies.get('quadra') || '');
    const [esporte, setEsporte] = useState(cookies.get('esporte') || '');
    const [pessoa, setPessoa] = useState(cookies.get('qntPessoa') || '');
    const [isConfirmed, setIsConfirmed] = useState(false);


    console.log(cookies.get('dia'))
    console.log(cookies.get('quadra'))
    console.log(cookies.get('esporte'))
    console.log(cookies.get('qntPessoa'))

    function setQuadraAndSaveToCookie(value: string) {

        setQuadra(value); // Define o valor de quadra usando setQuadra
        cookies.set('quadra', value); // Armazena o valor em um cookie chamado 'quadra'

    }

    function setEsporteAndSaveToCookie(value: string) {
        setEsporte(value); // Update the value of esporte using setEsporte
        cookies.set('esporte', value); // Store the value in a cookie named 'esporte'
    }

    function setPessoaAndSaveToCookie(value: string) {
        setPessoa(value); // Update the value of pessoa using setPessoa
        cookies.set('qntPessoa', value); // Store the value in a cookie named 'qntPessoa'
    }

    function quadraEscolhida(quadra: string): StaticImageData | undefined {
        if (quadra === "Quadra A") {
            return quadra1;
        } else if (quadra == "Quadra B") {
            return quadra2;
        }

        // Add more conditions for other quadras if needed
        return undefined;
    }

    // Inside your component
    const valImg = quadraEscolhida(quadra);



    useEffect(() => {
        if (quadra && esporte && pessoa) {
            setIsConfirmed(true);
        } else {
            setIsConfirmed(false);
        }
    }, [quadra, esporte, pessoa]);

    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


            <div className='border-2 border-black font-poppins flex flex-col bg-mauaLightBrown m-4 p-6 rounded-2xl'>
                <div className='flex flex-col sm:flex-row'>

                    {valImg && <Image src={valImg} className="border-2 border-black shadow-md rounded-2xl w-80 h-80 lg:w-auto lg:h-80" alt="Quadra Image" />}



                    <div className='flex-col flex w-full m-auto  '>
                        <h1 className='text-5xl font-bold mb-10 mt-4 sm:mt-0 m-auto'>
                            Quadra
                        </h1>
                        <p className=' text-xl text-center sm:m-auto sm:text-2xl font-semibold '>
                            Regras a serem seguidas na utilização das quadras*:<br />
                        </p>
                        <ul className='ml-4 sm:m-auto pt-4 space-y-1 text-lg list-disc'>
                            <li>Utilizar roupas adequadas (Proibido jeans/sarja).</li>
                            <li>Utilizar calçados fechados (Proibido chinelos/sandálias/crocs).</li>
                            <li>Necessário apresentar comprovante da reserva.</li>
                            <li>Proibido poluição sonora (gritar palavrões, etc.).</li>
                            <li>Proibido utilizar material próprio**.</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col space-y-2 m-auto mt-3 sm:mt-10'>
                    <p className=' text-center text-xl sm:text-2xl mb-3 font-semibold'>
                        Obs: A montagem das redes de volei só serão realizadas caso haja 6 ou mais jogadores
                    </p>
                    <ul className='text-xl space-y-1'>
                        <li>
                            * Caso haja o descumprimento de qualquer uma das regras acima, haverá consequências disciplinares. 
                        </li>
                        <li>
                            ** O material a ser utilizado é fornecido na hora.
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col sm:flex-row m-auto mt-10 space-y-8 sm:space-x-64'>
                    <div className='flex flex-col sm:flex-row m-auto sm:space-x-10'>
                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Quadra</label>
                            <select className='border-2 border-black bg-mauaYelllowButton shadow-xl rounded-3xl text-xl text-center w-40 text-white px-4 py-1' onChange={(event) => setQuadraAndSaveToCookie(event.target.value)}>
                                {quadras.map((quadra) => (
                                    <option key={quadra.label} value={quadra.label} className='text-left'>
                                        {quadra.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Esporte</label>
                            <select className='border-2 border-black bg-mauaYelllowButton shadow-xl rounded-3xl text-xl text-center w-40 text-white px-4 py-1' onChange={(event) => setEsporteAndSaveToCookie(event.target.value)}>
                                {esportes.map((esportes) => (
                                    <option key={esportes.label} value={esportes.label} className='text-left'>
                                        {esportes.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col text-center'>
                            <label className=' font-bold'>Qnt. Pessoas</label>
                            <select className='border-2 border-black bg-mauaYelllowButton shadow-xl rounded-3xl text-xl text-center w-40 text-white px-4 py-1' onChange={(event) => setPessoaAndSaveToCookie(event.target.value)}>
                                {pessoas.map((pessoas) => (
                                    <option key={pessoas.label} value={pessoas.label} className='text-center'>
                                        {pessoas.label}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                    <ConfirmButton rotas="pagSelecao4" disabled={!isConfirmed} />

                </div>
            </div>
        </>

    )
}