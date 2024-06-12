import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function MultasItems({ item }) {
  const { multas, multasHome } = useContext(ResidenciaContext);
  const fechas = item.fecha.split("T");

  const handleClick = (item) => {
    multas.removeMultas(item, multasHome);
  };

  return (
    <tr className="grid grid-cols-7 text-left w-full px-4">
      <th className="text-sm w-1/7">{item.id}</th>
      <th className="text-sm w-1/7">{item.motivo}</th>
      <th className="text-sm w-1/7"> {item.total}</th>
      {item.pagado === false ? (
        <th className="text-sm w-1/7">Pendiente</th>
      ) : (
        <th className="text-sm w-1/7">Pagado</th>
      )}
      <th className="text-sm w-1/7">{item.propietario}</th>
      <th className="text-sm w-1/7"> {fechas[0]}</th>
      <th className="">
        <div className="flex space-x-2">
          <NavLink to={{ pathname: `/editMulta/${item.id}` }}>
            <PencilSquareIcon className="w-4 h-4 hover:text-blue-600 hover:cursor-pointer" />
          </NavLink>
          <TrashIcon
            className="w-4 h-4 hover:text-red-600 hover:cursor-pointer"
            onClick={() => handleClick(item)}
          />
        </div>
      </th>
    </tr>
  );
}

export { MultasItems };
