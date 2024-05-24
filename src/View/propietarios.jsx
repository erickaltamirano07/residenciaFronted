import React, { useContext } from "react";
import { Layout } from "../Components/layout";
import { ResidenciaContext } from "../Context/residenciaContext";
import { PropietarioItems } from "../Components/propietariosItems";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Propiestarios() {
  const { propietarios } = useContext(ResidenciaContext);
  const navigate = useNavigate();

  const onSearchValueChange = (event) => {
    propietarios.setSearchValue(event.target.value);
  };

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <div className="flex flex-row justify-between w-full ">
            <input
              type="text"
              placeholder="Nombre"
              className="outline outline-offset-1 outline-1 rounded-lg"
              onChange={onSearchValueChange}
            />
            <button
              className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
              onClick={() => navigate("/newPropietario")}
            >
              Crear
            </button>
          </div>

          <div className="overflow-y-scroll h-5/6">
            {propietarios.searchedPropietario.length > 0 ? (
              <table className="w-full  ">
                <thead className="bg-gray-800 w-full p-4">
                  <tr className="text-white grid grid-cols-6 p-4">
                    <th className="text-sm w-1/6">Id</th>
                    <th className="text-sm w-1/6">Nombre</th>
                    <th className="text-sm w-1/6">Apellido</th>
                    <th className="text-sm  w-1/6">Casa</th>
                    <th className="text-sm  w-1/6">Correo</th>
                    <th className="text-sm justify-self-end">Accion</th>
                  </tr>
                </thead>
                <tbody className="" id="tbody">
                  {propietarios.searchedPropietario.map((propietario) => (
                    <PropietarioItems item={propietario} key={propietario.id} />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="w-full">
                <LinearProgress />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export { Propiestarios };
