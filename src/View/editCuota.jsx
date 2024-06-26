import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useParams } from "react-router-dom";
import { FormCuota } from "../Components/formCuota";

function EditCuota() {
  const { cuotas, cuotasHome } = useContext(ResidenciaContext);
  const { id } = useParams();

  let cuota = [cuotas.cuotas.find((element) => element.id === parseInt(id))];
  cuota = cuota[0];

  return (
    <FormCuota
      label="Editar Cuota"
      id={cuota.id}
      mes={cuota.mes}
      anio={cuota.anio}
      pagado={cuota.pagado}
      valor={cuota.valor}
      propietario={cuota.propietario}
      submitEvent={(text) => cuotas.putCuota(parseInt(id), text, cuotasHome)}
    />
  );
}

export { EditCuota };
