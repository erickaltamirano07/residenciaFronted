import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { FormMulta } from "../Components/formMultas";
import { useParams } from "react-router-dom";

function EditMulta() {
  const { multas } = useContext(ResidenciaContext);
  const { id } = useParams();

  let multa = [multas.multas.find((element) => element.id === parseInt(id))];
  multa = multa[0];

  return (
    <FormMulta
      label="Editar Presupuesto"
      id={multa.id}
      total={multa.total}
      motivo={multa.motivo}
      pagado={multa.pagado}
      propietario={multa.propietario}
      submitEvent={(text) => multas.putMulta(parseInt(id), text)}
    />
  );
}

export { EditMulta };
