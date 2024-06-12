import React, { useContext, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ResidenciaContext } from "../Context/residenciaContext";

function ChartDoughnut(props) {
  const { gastosHome } = useContext(ResidenciaContext);
  const meses = ["Multas", "Gastos", "Cuotas"];
  const [valores, setValores] = useState([
    props.multasTotal,
    gastosHome.totalGastos,
    props.cuotasTotal,
  ]);

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="flex justify-center items-center h-full px-4">
      <Doughnut
        data={{
          labels: meses,
          datasets: [
            {
              data: valores,
            },
          ],
        }}
      ></Doughnut>
    </div>
  );
}

export { ChartDoughnut };
