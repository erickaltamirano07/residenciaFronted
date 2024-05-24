import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useParams } from "react-router-dom";
import { FormPresupuesto } from "../Components/formPresupuesto";

function EditPresupuesto() {
  const { presupuestos } = useContext(ResidenciaContext);
  const { id } = useParams();

  let presupuesto = [
    presupuestos.presupuestos.find((element) => element.id === parseInt(id)),
  ];
  presupuesto = presupuesto[0];

  console.log(presupuesto);

  return (
    <FormPresupuesto
      label="Editar Presupuesto"
      id={presupuesto.id}
      total={presupuesto.total}
      parcial={presupuesto.parcial}
      anio={presupuesto.anio}
      submitEvent={(text) => presupuestos.putPresupuesto(parseInt(id), text)}
    />
  );
}

export { EditPresupuesto };
