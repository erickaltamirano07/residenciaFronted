import React, { useContext } from "react";
import { Layout } from "../Components/layout";
import { ResidenciaContext } from "../Context/residenciaContext";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MultasItems } from "../Components/multaItems";

const Multas = () => {
  const { multas } = useContext(ResidenciaContext);
  const navigate = useNavigate();

  const onSearchValueChange = (event) => {
    multas.setSearchValue(event.target.value);
  };

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <div className="flex flex-row justify-between w-full ">
            <input
              type="text"
              placeholder="Motivo"
              className="outline outline-offset-1 outline-1 rounded-lg"
              onChange={onSearchValueChange}
            />
            <button
              className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
              onClick={() => navigate("/newMulta")}
            >
              Crear
            </button>
          </div>

          <div className="overflow-y-scroll h-5/6">
            {multas.searchedMultas.length > 0 ? (
              <table className="w-full  ">
                <thead className="bg-gray-800 w-full p-4">
                  <tr className="text-white grid grid-cols-7 p-4">
                    <th className="text-sm w-1/7 text-left">Id</th>
                    <th className="text-sm w-1/7 text-left">Motivo</th>
                    <th className="text-sm w-1/7 text-left">Total</th>
                    <th className="text-sm w-1/7 text-left">Estado</th>
                    <th className="text-sm w-1/7 text-left">Id Propietario</th>
                    <th className="text-sm w-1/7 text-left">Fecha</th>
                    <th className="text-sm w-1/7 text-left">Accion</th>
                  </tr>
                </thead>
                <tbody className="" id="tbody">
                  {multas.searchedMultas.map((multa) => (
                    <MultasItems item={multa} key={multa.id} />
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

export { Multas };
