import Image from "next/image";
import { useState } from "react";
import logo from "../../img/image.png"
import { getLogado } from '../components/auth';
import { useEffect } from 'react';

interface HeaderProps {
    links: Array<{ name: string, link: string }>;
}



export default function Header({ links }: HeaderProps) {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };



    useEffect(() => {
        const logado = getLogado();
        if (logado) {

        }
        console.log('Component mounted');
    }, []);






    return (
        <header className="md:shadow-md md:justify-between md:flex bg-mauaBlue padding text-cyan-50 text-2xl font-bold ">

            <div>
                <a href="#">
                    <Image src={logo} alt="Logo" className="h-20 w-auto p-3 " />
                </a>
            </div>

            <button className="block md:hidden text-white text-xl focus:outline-none absolute right-8 top-4 cursor-pointer " onClick={toggleMenu}>
                <i className={`${open ? "Close" : "Menu"} material-icons md-60`}>
                    menu
                </i>
            </button>

            <nav className={`${open ? "flex flex-col md:flex-row md:items-center" : "hidden md:flex"} md:flex md:items-center md:space-x-10 md:mr-10 md:min-w-auto md:align-middle md:pb-0 pb-5 md:bg-inherit md:p-0 md:space-y-0 md:text-white bg-white md:shadow-none shadow-2xl  pt-5 space-y-5`}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.link}
                        className=" text-center font-bold md:text-white md:hover:text-gray-300 text-black px-4 py-2 mt-2 md:mt-0 md:ml-4">
                        {link.name}

                    </a>
                ))}
            </nav>
        </header>
    );
}
