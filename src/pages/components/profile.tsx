import React, { useEffect } from "react";
import { NameUser, EmailUser, RaUser } from "@/lib/controller";
import Link from "next/link";
import { logout } from "@/lib/authentication";
import { removeAllCookies } from "@/lib/cookie";


export default function Profile() {

   


    const handleLogOut = async () => {

        logout()

        removeAllCookies()
        window.location.reload();

    }

    return (

        <div className="flex flex-col my-10 sm:my-0 sm:h-screen">
            <div className="bg-mauaBrown m-auto rounded-2xl w-2/3">
                <div className="text-center  space-y-8 p-6">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        {NameUser()}
                    </h1>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">Email</h1>
                        <label className="shadow-lg  bg-mauaLightBrown m-auto  sm:w-96 font-bold text-center rounded-xl overflow-x-scroll sm:overflow-auto text-2xl px-4 py-2">
                            {EmailUser()}
                        </label>


                    </div>
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">RA</h1>
                        <label className="shadow-lg bg-mauaLightBrown m-auto sm:w-96 font-bold text-center rounded-xl text-2xl px-4 py-2">
                            {RaUser()}
                        </label>
                    </div>

                    <div>
                        <Link href={""}>
                            <h1 className="font-normal text-2xl italic hover:text-blue-500">Historico de reservas</h1>
                        </Link>
                    </div>

                    <div className=" text-center">
                        <div>
                            <button
                                onClick={handleLogOut}
                                className="text-3xl bg-mauaRed rounded-xl border-4 border-red-500 text-white  font-bold  text-center align-middle"
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