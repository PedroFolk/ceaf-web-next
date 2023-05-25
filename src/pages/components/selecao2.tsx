import Link from 'next/link';
import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"
import ConfirmButton from './confirmButton'
import cookies from 'js-cookie'
import Image from "next/image"
import { SetStateAction, useEffect, useState } from 'react';

interface DateProps {
    date: { sem: string, dia: string }[];
    hora: { hora: string }[];
}

export default function DateSel({ date = [], hora = [] }: DateProps) {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedHour, setSelectedHour] = useState('');
    const [dia, setDia] = useState(cookies.get('dia') || '');
    const [horario, setHorario] = useState(cookies.get('hora') || '');

    const handleButtonClick = (date: SetStateAction<string>) => {
        setSelectedDate(date);
    };

    const handleHourClick = (hour: SetStateAction<string>) => {
        setSelectedHour(hour);
    };

    useEffect(() => {
        setDia(selectedDate);
        cookies.set('dia', selectedDate);
    }, [selectedDate]);

    useEffect(() => {
        setHorario(selectedHour);
        cookies.set('hora', selectedHour);
    }, [selectedHour]);

    const isButtonDisabled = !(selectedDate && selectedHour);

    return (
        <div className='font-poppins sm:flex space-y-6 sm:space-y-0 shadow-lg'>
            <div className="flex flex-col m-4 space-y-6">
                <Image src={quadra1} alt="Quadra1" className="border-2 border-black rounded-2xl w-80 h-80 m-auto sm:m-0 lg:w-auto lg:h-96" />
                <div className='sm:flex border-2 border-black bg-mauaBrown py-5 sm:py-8 space-y-10 sm:space-y-0 mx-5 sm:mx-0 rounded-2xl  '>
                    <h1 className='flex  text-center text-4xl sm:m-auto flex-col '>
                        <span className='mb-5  font-bold'>Data</span>{dia}
                    </h1>
                    <h1 className='flex  text-center sm:m-auto text-4xl flex-col'>
                        <span className='mb-5 font-bold'>Horario</span>{horario}
                    </h1>
                </div>
            </div>

            <div>
                <div className='border-2 border-black bg-mauaBrown m-4 rounded-2xl space-y-6'>
                    <div className=' rounded-l-xl pt-2 sm:pb-5'>
                        <div className='text-center mt-4 ml-4'>
                            <h3 className='text-5xl'>Dia</h3>
                        </div>
                        <div>
                            <div className=" overflow-x-scroll sm:overflow-auto flex text-center justify-center border-2 border-black bg-mauaLightBrown drop-shadow-lg sm:ml-4 sm:rounded-l-xl align-middle space-x-10">
                                {date.map((dateItem) => (
                                    <div key={dateItem.dia} className="sm:text-2xl flex flex-col font-bold md:text-white md:hover:text-gray-300 text-white text-lg">
                                        <button
                                            className={`hover:bg-gray-200 w-24 hover:text-black text-black p-2 rounded-xl ${selectedDate === dateItem.dia ? 'bg-mauaRed text-white  border-2  border-black' : ''}`}
                                            onClick={() => handleButtonClick(dateItem.dia)}
                                        >
                                            {dateItem.sem}
                                            <br />
                                            {dateItem.dia}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='text-center ml-4'>
                        <h3 className='text-5xl'>Horário</h3>
                    </div>
                    <div>
                        <div className="sm:mb-10 flex flex-wrap pb-2 text-center justify-center border-0 sm:border-2 sm:border-black sm:bg-mauaLightBrown ml-4 rounded-l-xl align-middle">
                            {hora.map((hour) => (
                                <div key={hour.hora} className="p-2 font-bold md:text-white md:hover:text-gray-300 text-white text-3xl justify-right">
                                    <button
                                        className={`border-2 border-black hover:bg-gray-200 hover:text-black bg-mauaButtonDefault w-24 p-2 rounded-xl  drop-shadow-lg ${selectedHour === hour.hora ? 'text-white bg-mauaYelllowButton' : ''}`}
                                        onClick={() => handleHourClick(hour.hora)}
                                    >
                                        {hour.hora}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='m-auto text-center mb-4 p-4'>
                        <ConfirmButton rotas='pagSelecao3' disabled={isButtonDisabled} />
                    </div>
                </div>
            </div>
        </div>
    );
}
