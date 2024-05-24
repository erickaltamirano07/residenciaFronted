import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";

import { useParams } from "react-router-dom";
import { FormEmpleados } from "../Components/formEmpleados";

function EditEmpleado() {
  const { empleados } = useContext(ResidenciaContext);
  const { id } = useParams();

  let empleado = [
    empleados.empleados.find((element) => element.id === parseInt(id)),
  ];
  empleado = empleado[0];

  console.log(empleado);

  return (
    <FormEmpleados
      label="Editar Empleado"
      id={empleado.id}
      nombre={empleado.nombre}
      apellido={empleado.apellido}
      salario={empleado.salario}
      cargo={empleado.cargo}
      submitEvent={(text) => empleados.putEmpleado(parseInt(id), text)}
    />
  );
}

export { EditEmpleado };
