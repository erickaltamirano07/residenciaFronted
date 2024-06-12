import React, { useContext } from "react";
import { Layout } from "../Components/layout";
import { ChartLine } from "../Components/chartLine";
import { ChartDoughnut } from "../Components/chartDoughnut";
import { ResidenciaContext } from "../Context/residenciaContext";

function Dashboard() {
  const { presupuestoHome, gastosHome, multasHome, cuotasHome } =
    useContext(ResidenciaContext);

  return (
    <Layout>
      <div className="flex justify-around h-1/6 m-3">
        <div className="w-1/5  bg-green-600 rounded-3xl shadow-2xl">
          <div className="p-4 flex justify-around items-center h-full text-center">
            <p className="text-white font-bold text-lg">Cuotas</p>
            <p className="text-white font-bold text-lg">
              ${cuotasHome.totalCuotas}
            </p>
          </div>
        </div>
        <div className="w-1/5  bg-red-600 rounded-3xl shadow-2xl">
          <div className="p-4 flex justify-around items-center h-full text-center">
            <p className="text-white font-bold text-lg">Gastos</p>
            <p className="text-white font-bold text-lg">
              ${gastosHome.totalGastos}
            </p>
          </div>
        </div>
        <div className="w-1/5  bg-yellow-500 rounded-3xl shadow-2xl">
          <div className="p-4 flex justify-around items-center h-full text-center">
            <p className="text-white font-bold text-lg">Multas</p>
            <p className="text-white font-bold text-lg">${multasHome.multa}</p>
          </div>
        </div>
        <div className="w-1/5  bg-blue-500 rounded-3xl shadow-2xl">
          <div className="p-4 flex justify-around items-center h-full text-center">
            <p className="text-white font-bold text-lg">Presupuesto</p>
            <p className="text-white font-bold text-lg">
              $
              {presupuestoHome.presupuesto.length > 0
                ? presupuestoHome.presupuesto[0].total
                : 0}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 grid-rows-12 h-3/4">
        <div className="col-start-2 col-end-8 bg-white row-start-2 row-end-13 shadow-2xl rounded-lg content-center">
          <ChartLine
            multasMeses={multasHome.multasMeses}
            cuotasMeses={cuotasHome.cuotasLine}
          />
        </div>
        <div className="col-start-9 col-end-12 bg-white row-start-2 row-end-13 shadow-2xl rounded-lg">
          <ChartDoughnut
            multasTotal={multasHome.multa}
            cuotasTotal={cuotasHome.totalCuotas}
          />
        </div>
      </div>
    </Layout>
  );
}

export { Dashboard };
