import React, { useContext } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useParams } from "react-router-dom";
import { FormGasto } from "../Components/formGasto";

function EditGasto() {
  const { gastos, gastosHome } = useContext(ResidenciaContext);
  const { presupuestos } = useContext(ResidenciaContext);
  const { id } = useParams();

  let gasto = [gastos.gastos.find((element) => element.id === parseInt(id))];
  gasto = gasto[0];

  return (
    <FormGasto
      label="Editar Gasto"
      id={gasto.id}
      motivo={gasto.motivo}
      valor={gasto.valor}
      dia={gasto.dia}
      mes={gasto.mes}
      anio={gasto.anio}
      submitEvent={(text) =>
        gastos.putGasto(
          parseInt(id),
          text,
          presupuestos,
          gastosHome,
          gastosHome
        )
      }
    />
  );
}

export { EditGasto };
