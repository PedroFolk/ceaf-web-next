import Link from "next/link";

export default function ConfirmButton() {
    return(
        <>
            <div className=" text-center m-8">
                <button className=" drop-shadow-lg text-3xl font-bold bg-mauaRed border-mauaBrown border-4 px-5 py-3 rounded-3xl text-white">
                    <Link href="selecao2">Confirmar</Link>
                </button>
            </div>
        </>
    );
}