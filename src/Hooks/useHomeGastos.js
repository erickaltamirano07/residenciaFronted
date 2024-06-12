import { useState, useEffect } from "react";

const useHomeGastos = () => {
  const uri = "http://localhost:8762/ms-gasto/gasto";
  let enero2 = [];
  let febrero2 = [];
  let marzo2 = [];
  let abril2 = [];
  let mayo2 = [];
  let junio2 = [];
  let julio2 = [];
  let agosto2 = [];
  let septiembre2 = [];
  let octubre2 = [];
  let noviembre2 = [];
  let diciembre2 = [];

  const [gastos, setGastos] = useState([
    {
      id: 0,
      dia: "",
      mes: "",
      anio: "",
      motivo: "",
      valor: 0,
    },
  ]);
  let gastosLine = [];
  let totalGastos = [];

  useEffect(() => {
    var y = new Date().getFullYear();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
      }),
    };

    fetch(uri, requestOptions)
      .then((response) => response.json())
      .then((data) => setGastos(data.filter((x) => x.anio == y)));
  }, []);

  if (gastos.length > 1) {
    gastosLine = [];
    const eneroTemp = gastos.filter((x) => x.mes === "01");    
    const febreroTemp = gastos.filter((x) => x.mes === "02");
    const marzoTemp = gastos.filter((x) => x.mes === "03");
    const abrilTemp = gastos.filter((x) => x.mes === "04");
    const mayoTemp = gastos.filter((x) => x.mes === "05");
    const junioTemp = gastos.filter((x) => x.mes === "06");
    const julioTemp = gastos.filter((x) => x.mes === "07");
    const agostoTemp = gastos.filter((x) => x.mes === "08");
    const septiembreTemp = gastos.filter((x) => x.mes === "09");
    const octubreTemp = gastos.filter((x) => x.mes === "10");
    const noviembreTemp = gastos.filter((x) => x.mes === "11");
    const diciembreTemp = gastos.filter((x) => x.mes === "12");
    eneroTemp.forEach((x) => enero2.push(x.valor));
    febreroTemp.forEach((x) => febrero2.push(x.valor));
    marzoTemp.forEach((x) => marzo2.push(x.valor));
    abrilTemp.forEach((x) => abril2.push(x.valor));
    mayoTemp.forEach((x) => mayo2.push(x.valor));
    junioTemp.forEach((x) => junio2.push(x.valor));
    julioTemp.forEach((x) => julio2.push(x.valor));
    agostoTemp.forEach((x) => agosto2.push(x.valor));
    septiembreTemp.forEach((x) => septiembre2.push(x.valor));
    octubreTemp.forEach((x) => octubre2.push(x.valor));
    noviembreTemp.forEach((x) => noviembre2.push(x.valor));
    diciembreTemp.forEach((x) => diciembre2.push(x.valor));

    gastosLine.push(
      enero2.reduce((a, b) => a + b),
      febrero2.reduce((a, b) => a + b),
      marzo2.reduce((a, b) => a + b),
      abril2.reduce((a, b) => a + b),
      mayo2.reduce((a, b) => a + b),
      junio2.reduce((a, b) => a + b),
      julio2.reduce((a, b) => a + b),
      agosto2.reduce((a, b) => a + b),
      septiembre2.reduce((a, b) => a + b),
      octubre2.reduce((a, b) => a + b),
      noviembre2.reduce((a, b) => a + b),
      diciembre2.reduce((a, b) => a + b)
      );
     totalGastos = gastosLine.reduce((a, b) => a + b);
  } else {
      gastosLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      totalGastos = 0;
  }

  const actualizarGastos = () => {
    var y = new Date().getFullYear();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
      }),
    };

    fetch(uri, requestOptions)
      .then((response) => response.json())
      .then((data) => setGastos(data.filter((x) => x.anio == y)));
    
  }

  return {
      gastosLine,
    totalGastos,
      actualizarGastos
  };
};

export { useHomeGastos };
