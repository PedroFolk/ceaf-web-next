import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';
import { registrarReserva } from "@/lib/authentication";

import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { removeCookiesReserva } from "@/lib/cookie"
import { getNameByEmail, getRaByEmail } from "@/lib/controller"

export default function PagConfirma() {


    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleCheckboxChange = (event: { target: { checked: any } }) => {
        setCheckboxChecked(event.target.checked);

    };
    const router = useRouter();

    const handleButtonClick = async () => {
        registrarReserva(name, email, ra, data, horario, quadra, esporte, pessoa);
        proxPag()        

    };

    function proxPag() {
        router.push('/PagReservas');
        removeCookiesReserva()
    }

    const data = Cookies.get('dia') || "";
    const horario = Cookies.get('hora') || "";

    const esporte = Cookies.get('esporte') || "";
    const quadra = Cookies.get('quadra') || "";
    const pessoa = Cookies.get('qntPessoa') || "";

    const email = Cookies.get('email') || "";
    
    const [name, setName] = useState("");
    const [ra, setRA] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const nameResult = await getNameByEmail();
                setName(nameResult || "");


                const raResult = await getRaByEmail();
                setRA(raResult || "");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    // Determine the image based on the value of the 'quadra' cookie
    let quadraImage;
    if (quadra === "Quadra A") {
        quadraImage = quadra1;
    } else if (quadra === "Quadra B") {
        quadraImage = quadra2;
    } else {
        quadraImage = campo1; // Default image if 'quadra' cookie value is not recognized
    }
    return (
        <>

            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


            <div className='border-2 border-black font-poppins flex flex-col bg-mauaLightBrown m-4 p-6 rounded-2xl'>
                <div className='flex flex-col sm:flex-row'>
                    <Image src={quadraImage} alt="Quadra Image" className="border-2 border-black shadow-md rounded-2xl w-80 h-80 lg:w-auto lg:h-96" />

                    <div className='flex flex-col space-y-10 align-middle justify-center '>
                        <div className="flex flex-col text-3xl sm:text-4xl mt-5 font-bold space-y-4 m-auto ml-10">
                            <h1>
                                Nome:<span className="text-3xl font-medium"> {name}</span>
                            </h1>
                            <h1>
                                RA:<span className="text-3xl font-medium"> {ra}</span>
                            </h1>
                        </div>
                        <div className="flex flex-col text-3xl sm:text-4xl font-bold space-y-4 m-auto ml-10">
                            <h1>
                                Quadra:<span className="text-3xl font-medium"> {quadra}</span>
                            </h1>
                            <h1>
                                Esporte:<span className="text-3xl font-medium"> {esporte}</span>
                            </h1>
                            <h1>
                                Qnt. de pessoas:<span className="text-3xl font-medium"> {pessoa} </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row ">
                    <div className="text-3xl sm:text-4xl mb-4 font-bold space-y-4 m-auto sm:m-0">
                        <h1>
                            Data:<span className="text-3xl font-medium"> {data}</span>
                        </h1>
                        <h1>
                            Horario:<span className="text-3xl font-medium"> {horario} </span>
                        </h1>
                    </div>
                    <div className="m-auto flex flex-col space-x-10 text-left sm:text-right space-y-2">
                        <div className=" flex space-x-2">
                            <input type="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} className="w-12 sm:w-6" />
                            <h1 className="my-4 sm:my-0 font-bold text-2xl">
                                Declaro que li e aceito os <span className="text-mauaRed underline"><Link href={"#"}>termos de uso</Link></span> das quadras.
                            </h1>
                        </div>

                        <button disabled={!checkboxChecked} onClick={handleButtonClick} className="text-center drop-shadow-lg text-3xl font-bold bg-mauaYelllowButton border-mauaButtonDefault border-4 px-5 py-3 w-auto rounded-3xl text-white">
                            Confirmar
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
}