import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormMulta } from "../Components/formMultas";

function NewMulta() {
  const { multas } = useContext(ResidenciaContext);

  return (
    <FormMulta
      label="Registar Multa"
      submitEvent={(text) => multas.postMulta(text)}
    />
  );
}

export { NewMulta };
