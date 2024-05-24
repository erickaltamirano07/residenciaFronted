import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function PropietarioItems({ item }) {
  const { propietarios } = useContext(ResidenciaContext);

  const handleClick = (item) => {
    propietarios.removePropietario(item);
  };

  return (
    <tr className="grid grid-cols-6 text-left w-full px-4">
      <th className="text-sm w-1/6">{item.id}</th>
      <th className="text-sm w-1/6">{item.nombre}</th>
      <th className="text-sm w-1/6"> {item.apellido}</th>
      <th className="text-sm w-1/6">{item.casaNumero}</th>
      <th className="text-xs w-1/6">{item.correo}</th>
      <th className="">
        <div className="flex space-x-5 justify-end">
          <NavLink to={{ pathname: `/editPropietario/${item.id}` }}>
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

export { PropietarioItems };
