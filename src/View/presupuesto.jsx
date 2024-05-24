import React, { useContext, useEffect } from "react";
import { Layout } from "../Components/layout";
import { ResidenciaContext } from "../Context/residenciaContext";

import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PresupuestosItems } from "../Components/presupuestosItems";

function Presupuestos() {
  const { presupuestos } = useContext(ResidenciaContext);
  const navigate = useNavigate();

  const onSearchValueChange = (event) => {
    presupuestos.setSearchValue(event.target.value);
  };

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <div className="flex flex-row justify-between w-full ">
            <input
              type="text"
              placeholder="Año"
              className="outline outline-offset-1 outline-1 rounded-lg"
              onChange={onSearchValueChange}
            />
            <button
              className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
              onClick={() => navigate("/newPresupuesto")}
            >
              Crear
            </button>
          </div>

          <div className="overflow-y-scroll w-10/12 h-5/6">
            {presupuestos.searchedPresupuesto.length > 0 ? (
              <table className="w-full  ">
                <thead className="bg-gray-800 w-full p-4">
                  <tr className="text-white grid grid-cols-6 p-4">
                    <th className="text-sm w-1/5">Id</th>
                    <th className="text-sm w-1/5">Total</th>
                    <th className="text-sm w-1/5">Parcial</th>
                    <th className="text-sm  w-1/5">Año</th>
                    <th className="text-sm  w-1/5">Accion</th>
                  </tr>
                </thead>
                <tbody className="" id="tbody">
                  {presupuestos.searchedPresupuesto.map((presupuesto) => (
                    <PresupuestosItems
                      item={presupuesto}
                      key={presupuesto.id}
                    />
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

export { Presupuestos };
