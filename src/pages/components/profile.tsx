import React, { useEffect, useState } from "react";
import { getRaByEmail, getNameByEmail } from "@/lib/controller";
import Link from "next/link";
import { logout } from "@/lib/authentication";
import { cookieController, removeAllCookies } from "@/lib/cookie";
import Cookies from "js-cookie";


export default function Profile() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [ra, setRA] = useState("");


    const handleLogOut = async () => {

        logout()

        removeAllCookies()
        window.location.reload();

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const nameResult = await getNameByEmail();
                setName(nameResult || "");

                const emailResult = Cookies.get('email');
                setEmail(emailResult || "");

                const raResult = await getRaByEmail();
                setRA(raResult || "");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (

        <div className="flex flex-col my-10 sm:my-0 sm:h-screen">
            <div className="border-2 border-black bg-mauaBrown m-auto rounded-2xl w-2/3">
                <div className="text-center  space-y-8 p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        {name}
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">Email</h1>
                        <label className="border-2 border-black shadow-lg w-48  bg-mauaLightBrown m-auto  sm:w-auto font-semibold text-center rounded-xl overflow-x-scroll sm:overflow-hidden text-2xl px-4 py-2">
                            {email}
                        </label>


                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">RA</h1>
                        <label className="border-2 border-black shadow-lg w-48 bg-mauaLightBrown m-auto sm:w-96 font-semibold text-center rounded-xl text-2xl px-4 py-2">
                            {ra}
                        </label>
                    </div>

                    <div>
                        <Link href="../PagReservas">
                            <h1 className="font-normal text-2xl italic hover:text-blue-500">Historico de reservas</h1>
                        </Link>
                    </div>

                    <div className=" text-center">
                        <div>
                            <button
                                onClick={handleLogOut}
                                className=" text-3xl bg-mauaRed rounded-xl border-4 border-red-500 text-white  font-bold  text-center align-middle"
                            >
                                <h1 className="px-4 py-1">Sair</h1>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}