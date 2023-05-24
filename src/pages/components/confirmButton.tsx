import Link from "next/link";

interface Rotas {
  rotas?: string;
  disabled?: boolean;
}

export default function ConfirmButton(props: Rotas) {
  const { rotas = "#", disabled = false } = props;

  return (
    <div className="font-poppins">
      <Link href={disabled ? "#" : rotas}>
        <button
          className={`text-center drop-shadow-lg text-3xl font-bold bg-mauaRed border-mauaBrown border-4 px-5 py-3 rounded-3xl text-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={disabled}
        >
          Confirmar
        </button>
      </Link>
    </div>
  );
}
