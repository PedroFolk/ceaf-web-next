import Link from 'next/link';
import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"
import ConfirmButton from './confirmButton'

import Image from "next/image"
import { Button } from 'rsuite';

interface DateProps {
    date: { sem: string, dia: string }[];
    hora: { hora: string, selected: boolean }[];
}


export default function DateSel({ date = [], hora = [] }: DateProps) {
    return (
        <div className='  sm:flex'>
            <div className="flex flex-col mt-5 sm:ml-4 mr-4">
                
                <Link href="/">
                    <Image src={quadra1} alt="Quadra1" className=" mx-4 sm:mx-0 rounded-2xl w-80 h-80 lg:w-auto lg:h-96" />
                </Link>
                <div className=' bg-mauaBrown my-4 space-y-10 text-4xl rounded-r-3xl sm:rounded-3xl p-2 '>
                    <h1 className='flex text-center flex-col '>
                        <span className='mb-5 font-bold'>Data</span>Sexta, 20 de Maio
                    </h1>
                    <h1 className='flex text-center flex-col'>
                    <span className='mb-5 font-bold'>Horario</span>13:00
                    </h1>
                </div>
            </div>




            <div >
                <div className='bg-mauaBrown mt-4 ml-4 mb-4 rounded-l-3xl sm:mr-4 sm:rounded-3xl'>
                    <div className=' rounded-l-xl pt-2 sm:pb-5'>
                        <div className='text-center mt-4 ml-4'>
                            <h3 className='text-5xl'>Dia</h3>
                        </div>
                        <div>
                            <div className='  flex text-center justify-center bg-mauaLightBrown drop-shadow-lg ml-4 rounded-l-xl align-middle  space-x-10'>
                                {date.map((date) => (
                                    <label className="sm:text-2xl flex flex-col font-bold md:text-white md:hover:text-gray-300 text-white text-lg"  >
                                        <button className=' text-black p-2 rounded-xl focus:bg-mauaRed  focus:text-white' name="date" >
                                            {date.sem}
                                            <br />
                                            {date.dia}
                                        </button>
                                    </label>

                                ))}

                            </div>
                        </div>
                    </div>

                    <div className='text-center ml-4 mt-20'>
                        <h3 className='text-5xl'>Horário</h3>
                    </div>
                    <div>
                        <div className='mb-10 flex flex-wrap text-center justify-center sm:bg-mauaLightBrown ml-4 rounded-l-xl align-middle'>
                            {hora.map((hora) => (
                                <label className="p-2 font-bold md:text-white md:hover:text-gray-300 text-white text-3xl justify-right"  >
                                    <button className='bg-mauaButtonDefault p-2 rounded-xl focus:bg-mauaYelllowButton drop-shadow-lg focus:text-white' name="date" >
                                        {hora.hora}
                                    </button>
                                </label>

                            ))}

                        </div>
                    </div>
                    <div className='text-transparent'>
                        a
                    </div>
                </div>
                <ConfirmButton />

            </div>

        </div>
    )
}