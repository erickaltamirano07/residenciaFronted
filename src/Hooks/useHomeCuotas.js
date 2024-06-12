import { useState, useEffect } from "react";

const useHomeCuotas = () => {
  const uri = "http://localhost:8762/ms-cuota/cuota";
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

  const [cuotas, setCuotas] = useState([
    {
      id: 1,
      mes: "",
      anio: "",
      valor: 0,
      pagado: true,
      propietario: 0
    },
  ]);
  let cuotasLine = [];
  let totalCuotas = [];

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
      .then((data) => setCuotas(data.filter((x) => x.anio == y)));
  }, []);

  if (cuotas.length > 1) {
    cuotasLine = [];
    const eneroTemp = cuotas.filter((x) => x.mes === "Enero");    
    const febreroTemp = cuotas.filter((x) => x.mes === "Febrero");
    const marzoTemp = cuotas.filter((x) => x.mes === "Marzo");
    const abrilTemp = cuotas.filter((x) => x.mes === "Abril");
    const mayoTemp = cuotas.filter((x) => x.mes === "Mayo");
    const junioTemp = cuotas.filter((x) => x.mes === "Junio");
    const julioTemp = cuotas.filter((x) => x.mes === "Julio");
    const agostoTemp = cuotas.filter((x) => x.mes === "Agosto");
    const septiembreTemp = cuotas.filter((x) => x.mes === "Septiembre");
    const octubreTemp = cuotas.filter((x) => x.mes === "Octubre");
    const noviembreTemp = cuotas.filter((x) => x.mes === "Noviembre");
    const diciembreTemp = cuotas.filter((x) => x.mes === "Diciembre");
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

    cuotasLine.push(
      enero2.reduce((a, b) => a + b,0),
      febrero2.reduce((a, b) => a + b,0),
      marzo2.reduce((a, b) => a + b,0),
      abril2.reduce((a, b) => a + b,0),
      mayo2.reduce((a, b) => a + b,0),
      junio2.reduce((a, b) => a + b,0),
      julio2.reduce((a, b) => a + b,0),
      agosto2.reduce((a, b) => a + b,0),
      septiembre2.reduce((a, b) => a + b,0),
      octubre2.reduce((a, b) => a + b,0),
      noviembre2.reduce((a, b) => a + b,0),
      diciembre2.reduce((a, b) => a + b,0)
      );
     totalCuotas = cuotasLine.reduce((a, b) => a + b,0);
  } else{
      cuotasLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      totalCuotas = 0;
  }

  return {
      cuotasLine,
      totalCuotas
  };
};

export { useHomeCuotas };
