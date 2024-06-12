import React from "react";
import { Header } from "../Components/header";
import { Navbar } from "../Components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Globalroutes } from "../Routes/globalRouter";
import { ResidenciaContext } from "../Context/residenciaContext";
import { usePropietarios } from "../Hooks/usePropietarios";
import { useNotificacion } from "../Hooks/useNotificacion";
import { useEmpleados } from "../Hooks/useEmpleados";
import { usePresupuesto } from "../Hooks/usePresupuesto";
import { useHome } from "../Hooks/useHome";
import { useGastos } from "../Hooks/useGastos";
import { useMultas } from "../Hooks/useMultas";
import { useCuotas } from "../Hooks/useCuotas";
import { useHomeGastos } from "../Hooks/useHomeGastos";
import { useHomeMultas } from "../Hooks/useHomeMultas";
import { useHomeCuotas } from "../Hooks/useHomeCuotas";
import { useHomePresupuesto } from "../Hooks/useHomePresupuesto";

function Template() {
  const propietarios = usePropietarios();
  const notificacion = useNotificacion();
  const empleados = useEmpleados();
  const presupuestos = usePresupuesto();
  const homes = useHome();
  const gastos = useGastos();
  const multas = useMultas();
  const cuotas = useCuotas();
  const gastosHome = useHomeGastos();
  const multasHome = useHomeMultas();
  const cuotasHome = useHomeCuotas();
  const presupuestoHome = useHomePresupuesto();
  return (
    <ResidenciaContext.Provider
      value={{
        propietarios,
        notificacion,
        empleados,
        presupuestos,
        homes,
        gastos,
        multas,
        cuotas,
        gastosHome,
        multasHome,
        cuotasHome,
        presupuestoHome,
      }}
    >
      <BrowserRouter>
        <div className="h-screen w-screen grid grid-cols-12 grid-rows-12">
          <Navbar />
          <Header />
          <Globalroutes />
        </div>
      </BrowserRouter>
    </ResidenciaContext.Provider>
  );
}
export { Template };
