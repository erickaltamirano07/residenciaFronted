import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormPropietario } from "../Components/formularioPropietario";

function NewPropietario() {
  const { propietarios } = useContext(ResidenciaContext);
  return (
    <FormPropietario
      label="Registar Propietario"
      submitEvent={(text) => propietarios.postPropietario(text)}
    />
  );
}

export { NewPropietario };
