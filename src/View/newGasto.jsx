import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormGasto } from "../Components/formGasto";

function NewGasto() {
  const { gastos } = useContext(ResidenciaContext);
  const { presupuestos } = useContext(ResidenciaContext);
  return (
    <FormGasto
      label="Registar Gasto"
      submitEvent={(text) => gastos.postGasto(text, presupuestos)}
    />
  );
}

export { NewGasto };
