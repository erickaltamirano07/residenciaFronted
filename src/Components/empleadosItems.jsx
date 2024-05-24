import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function EmpleadosItems({ item }) {
  const { empleados } = useContext(ResidenciaContext);

  const handleClick = (item) => {
    empleados.removeEmpleado(item);
  };

  return (
    <tr className="grid grid-cols-6 text-left w-full px-4">
      <th className="text-sm w-1/6">{item.id}</th>
      <th className="text-sm w-1/6">{item.nombre}</th>
      <th className="text-sm w-1/6"> {item.apellido}</th>
      <th className="text-sm w-1/6">{item.cargo}</th>
      <th className="text-xs w-1/6">{item.salario}</th>
      <th className="">
        <div className="flex space-x-2">
          <NavLink to={{ pathname: `/editEmpleado/${item.id}` }}>
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

export { EmpleadosItems };
