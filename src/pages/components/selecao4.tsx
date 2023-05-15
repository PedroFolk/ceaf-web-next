import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../img/Quadra2.jpg"
import campo1 from "../img/Campo.jpg"
import copa from "../img/CopaMaua.jpg"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';

import ConfirmButton from './confirmButton';


interface dadosFinais {
    esportes: { esportes: string, selected: boolean }[];
    pessoas: { pessoas: string, selected: boolean }[];
    quadras: { quadras: string, selected: boolean }[];
}

export default function PagConfirma() {
    const router = useRouter();

    return (
        <>

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            
            <div className='flex flex-col bg-mauaLightBrown m-4 p-6 rounded-2xl'>
                <div className='flex flex-col sm:flex-row'>
                    <Image src={quadra1} alt="Quadra1" className=" shadow-md rounded-2xl w-80 h-80 lg:w-auto lg:h-96" />
                    <div className='flex flex-col space-y-10 align-middle justify-center '>
                        <div className="flex flex-col text-3xl sm:text-4xl mt-5 font-bold space-y-4 sm:ml-40">
                            <h1>
                                Nome:<span className="text-3xl font-medium"> Projeto Integrador</span>
                            </h1>
                            <h1>
                                RA:<span className="text-3xl font-medium"> 22.000000-0</span>
                            </h1>
                        </div>
                        <div className="flex flex-col text-3xl sm:text-4xl font-bold space-y-4 sm:ml-40">
                            <h1>
                                Quadra:<span className="text-3xl font-medium"> Quadra 1</span>
                            </h1>
                            <h1>
                                Esporte:<span className="text-3xl font-medium"> Futebol</span>
                            </h1>
                            <h1>
                                Qnt. de pessoas:<span className="text-3xl font-medium"> 6</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row ">
                    <div className="text-3xl sm:text-4xl mb-4 font-bold space-y-4 ">
                        <h1>
                            Data:<span className="text-3xl font-medium"> Sexta, 12 de Maio</span>
                        </h1>
                        <h1>
                            Horario:<span className="text-3xl font-medium"> 12:00 </span>
                        </h1>
                    </div>
                    <div className="m-auto flex flex-col space-x-10 text-left sm:text-right space-y-2">
                        <div className=" flex space-x-2">
                            <input id="default-checkbox" type="checkbox" value="" className="w-6" />
                            <h1 className="my-4 sm:my-0 font-bold text-2xl">
                                Declaro que li e aceito os <span className="text-mauaRed underline"><Link href={"#"}>termos de uso</Link></span> das quadras.
                            </h1> 
                        </div>
                        <ConfirmButton rotas="pagSelecao4"/>

                    </div>
                </div>

            </div>
        </>
    );
}