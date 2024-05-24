import React from "react";
import { Dashboard } from "../View/dashboard";
import { useRoutes } from "react-router-dom";
import { Propiestarios } from "../View/propietarios";
import { NewPropietario } from "../View/newPropietario";
import { EditPropietario } from "../View/editPropietarios";
import { Notificacion } from "../View/notificacion";
import { Empleados } from "../View/empleados";
import { NewEmpleado } from "../View/newEmpleado";
import { EditEmpleado } from "../View/editEmpleados";
import { Presupuestos } from "../View/presupuesto";
import { EditPresupuesto } from "../View/editPresupuesto";
import { NewPresupuesto } from "../View/newPresupuesto";
import { Gastos } from "../View/gastos";
import { NewGasto } from "../View/newGasto";
import { EditGasto } from "../View/editGasto";
import { Multas } from "../View/multa";
import { NewMulta } from "../View/newMulta";
import { EditMulta } from "../View/editMulta";
import { Cuotas } from "../View/cuotas";
import { NewCuota } from "../View/newCuota";
import { EditCuota } from "../View/editCuota";
import { Home } from "../View/home.jsx";

function Globalroutes() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/propietarios", element: <Propiestarios /> },
    { path: "/newPropietario", element: <NewPropietario /> },
    { path: "/editPropietario/:id", element: <EditPropietario /> },
    { path: "/empleados", element: <Empleados /> },
    { path: "/newEmpleado", element: <NewEmpleado /> },
    { path: "/editEmpleado/:id", element: <EditEmpleado /> },
    { path: "/presupuestos", element: <Presupuestos /> },
    { path: "/newPresupuesto", element: <NewPresupuesto /> },
    { path: "/editPresupuesto/:id", element: <EditPresupuesto /> },
    { path: "/gastos", element: <Gastos /> },
    { path: "/newGasto", element: <NewGasto /> },
    { path: "/editGasto/:id", element: <EditGasto /> },
    { path: "/multas", element: <Multas /> },
    { path: "/newMulta", element: <NewMulta /> },
    { path: "/editMulta/:id", element: <EditMulta /> },
    { path: "/notificacion", element: <Notificacion /> },
    { path: "/cuotas", element: <Cuotas /> },
    { path: "/newCuota", element: <NewCuota /> },
    { path: "/editCuota/:id", element: <EditCuota /> },
    { path: "*", element: <p>Not found</p> },
  ]);
  return element;
}

export { Globalroutes };
