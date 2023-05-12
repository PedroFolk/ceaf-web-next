import Link from "next/link";

export default function ConfirmButton() {
    return(
        <>
            <div className=" text-center">
                <button className=" drop-shadow-lg text-3xl font-bold bg-mauaRed border-mauaBrown border-4 px-5 py-3 rounded-3xl text-white">
                    <Link href="pagSelecao3">Confirmar</Link>
                </button>
            </div>
        </>
    );
}