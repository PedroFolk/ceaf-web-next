import { NewReservaType, NewUsuarioType } from "@/types/bdTypes";
import React from "react";

interface IProps {
    usuari: NewUsuarioType;
}

interface ITeste {
    reservas: NewReservaType;
}

export function Information({ usuari }: IProps) {
    console.log(usuari, "usuari");
    return (
        <div >
            <div>
                {usuari.Nome}
            </div>
            <div>
                {usuari.Senha}
            </div>
            <div>
                {usuari.email}
            </div>
            <div>
                {usuari.ra}
            </div>
        </div>
    )
}

export function Testie({ reservas }: ITeste) {
    return (
        <div>
            <div>
                {reservas.horario}

            </div>
            <div>
                {reservas.data}

            </div>
            <div>
                {reservas.nome}

            </div>
            <div>
                {reservas.quadra}

            </div>
            <div>
                {reservas.ra}

            </div>
        </div>
    )
}

export default { Information, Testie }