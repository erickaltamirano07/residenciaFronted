import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function PresupuestosItems({ item }) {
  const { presupuestos } = useContext(ResidenciaContext);

  const handleClick = (item) => {
    presupuestos.removePresupuesto(item);
  };

  return (
    <tr className="grid grid-cols-6 text-left w-full px-4">
      <th className="text-sm w-1/5">{item.id}</th>
      <th className="text-sm w-1/5">{item.total}</th>
      <th className="text-sm w-1/5"> {item.parcial}</th>
      <th className="text-sm w-1/5">{item.anio}</th>
      <th className="">
        <div className="flex space-x-2">
          <NavLink to={{ pathname: `/editPresupuesto/${item.id}` }}>
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

export { PresupuestosItems };
