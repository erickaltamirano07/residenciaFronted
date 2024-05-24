import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormPropietario } from "../Components/formularioPropietario";
import { useParams } from "react-router-dom";

function EditPropietario() {
  const { propietarios } = useContext(ResidenciaContext);
  const { id } = useParams();

  let propietario = [
    propietarios.propietarios.find((element) => element.id === parseInt(id)),
  ];
  propietario = propietario[0];

  console.log(propietario);

  return (
    <FormPropietario
      label="Editar Propietario"
      id={propietario.id}
      nombre={propietario.nombre}
      apellido={propietario.apellido}
      casa={propietario.casaNumero}
      correo={propietario.correo}
      submitEvent={(text) => propietarios.putPropietario(parseInt(id), text)}
    />
  );
}

export { EditPropietario };
