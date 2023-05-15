import Link from "next/link";
import { name } from "@/constants";

interface rotas {
  rotas: string;
}

export default function ConfirmButton(props: rotas) {
  const p = new name();
  const info = p.info();
  const { rotas } = props; // Destructure the rotas property

  return (
    <div className="">
      <button className="text-center drop-shadow-lg text-3xl font-bold bg-mauaRed border-mauaBrown border-4 px-5 py-3 rounded-3xl text-white">
        <Link href={rotas}>{info}</Link>
      </button>
    </div>
  );
}
