import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function CuotasItems({ item }) {
  const { cuotas } = useContext(ResidenciaContext);

  const handleClick = (item) => {
    cuotas.removeCuotas(item);
  };

  return (
    <tr className="grid grid-cols-7 text-left w-full px-4">
      <th className="text-sm w-1/7">{item.id}</th>
      <th className="text-sm w-1/7">{item.mes}</th>
      <th className="text-sm w-1/7"> {item.anio}</th>
      <th className="text-sm w-1/7">${item.valor}</th>
      <th className="text-xs w-1/7">{item.propietario}</th>
      {item.pagado === false ? (
        <th className="text-sm w-1/7">Pendiente</th>
      ) : (
        <th className="text-sm w-1/7">Pagado</th>
      )}
      <th className="">
        <div className="flex space-x-2">
          <NavLink to={{ pathname: `/editCuota/${item.id}` }}>
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

export { CuotasItems };
