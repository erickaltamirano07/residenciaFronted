import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useParams } from "react-router-dom";
import { FormPresupuesto } from "../Components/formPresupuesto";

function EditPresupuesto() {
  const { presupuestos, presupuestoHome } = useContext(ResidenciaContext);
  const { id } = useParams();

  let presupuesto = [
    presupuestos.presupuestos.find((element) => element.id === parseInt(id)),
  ];
  presupuesto = presupuesto[0];

  return (
    <FormPresupuesto
      label="Editar Presupuesto"
      id={presupuesto.id}
      total={presupuesto.total}
      parcial={presupuesto.parcial}
      anio={presupuesto.anio}
      submitEvent={(text) =>
        presupuestos.putPresupuesto(parseInt(id), text, presupuestoHome)
      }
    />
  );
}

export { EditPresupuesto };
