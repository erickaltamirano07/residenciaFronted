import React, { useContext, useState } from "react";
import { Layout } from "../Components/layout";
import { ResidenciaContext } from "../Context/residenciaContext";

import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CuotasItems } from "../Components/cuotasItems";

const Cuotas = () => {
  const { cuotas } = useContext(ResidenciaContext);
  const navigate = useNavigate();
  const anio = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  const onAniosChange = (event) => {
    cuotas.setAnios(event.target.value);
  };

  const onSearchValueChange = (event) => {
    cuotas.setSearchValue(event.target.value);
  };

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <div className="flex flex-row justify-between w-full ">
            <input
              type="text"
              placeholder="mes"
              className="outline outline-offset-1 outline-1 rounded-lg"
              onChange={onSearchValueChange}
            />
            <select onChange={onAniosChange}>
              {anio.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
            <button
              className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
              onClick={() => navigate("/newCuota")}
            >
              Crear
            </button>
          </div>

          <div className="overflow-y-scroll h-5/6">
            {cuotas.searchedCuotas.length > 0 ? (
              <table className="w-full  ">
                <thead className="bg-gray-800 w-full p-4">
                  <tr className="text-white grid grid-cols-7 p-4">
                    <th className="text-sm w-1/7 text-left">Id</th>
                    <th className="text-sm w-1/7 text-left">mes</th>
                    <th className="text-sm w-1/7 text-left">anio</th>
                    <th className="text-sm w-1/7 text-left">Valor</th>
                    <th className="text-sm w-1/7 text-left">Id Propietario</th>
                    <th className="text-sm w-1/7 text-left">Pagado</th>
                    <th className="text-sm w-1/7 text-left">Accion</th>
                  </tr>
                </thead>
                <tbody className="" id="tbody">
                  {cuotas.searchedCuotas.map((cuota) => (
                    <CuotasItems item={cuota} key={cuota.id} />
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
};

export { Cuotas };
