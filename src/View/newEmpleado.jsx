import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormEmpleados } from "../Components/formEmpleados";

function NewEmpleado() {
  const { empleados } = useContext(ResidenciaContext);
  return (
    <FormEmpleados
      label="Registar Empleado"
      submitEvent={(text) => empleados.postEmpleado(text)}
    />
  );
}

export { NewEmpleado };
