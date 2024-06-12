import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ResidenciaContext } from "../Context/residenciaContext";
import { LinearProgress } from "@mui/material";

function ChartLine(props) {
  const { gastosHome } = useContext(ResidenciaContext);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const [multas, setMultas] = useState(props.multasMeses);

  const [gasto, setGasto] = useState(gastosHome.gastosLine);

  const [cuota, setCuota] = useState(props.cuotasMeses);

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
      {gastosHome.gastosLine.length > 0 ? (
        <Line
          options={options}
          data={{
            labels: meses,
            datasets: [
              {
                label: "Multas",
                data: multas,
              },
              {
                label: "Gastos",
                data: gasto,
              },
              {
                label: "Cuotas",
                data: cuota,
              },
            ],
          }}
        ></Line>
      ) : (
        <div className="w-full">
          <LinearProgress />
        </div>
      )}
    </div>
  );
}

export { ChartLine };
