import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormPresupuesto } from "../Components/formPresupuesto";

function NewPresupuesto() {
  const { presupuestos, presupuestoHome } = useContext(ResidenciaContext);
  return (
    <FormPresupuesto
      label="Registar Presupuesto"
      submitEvent={(text) =>
        presupuestos.postPresupuesto(text, presupuestoHome)
      }
    />
  );
}

export { NewPresupuesto };
