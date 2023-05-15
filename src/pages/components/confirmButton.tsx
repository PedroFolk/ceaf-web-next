import Link from "next/link";

interface Rotas {
  rotas?: string;
}

export default function ConfirmButton(props: Rotas) {
  const { rotas = "#" } = props;

  return (
    <div className="">
      <button className="text-center drop-shadow-lg text-3xl font-bold bg-mauaRed border-mauaBrown border-4 px-5 py-3 rounded-3xl text-white">
        <Link href={rotas}>Confirmar</Link>
      </button>
    </div>
  );
}
