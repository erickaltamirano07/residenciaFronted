import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="row-span-12 col-span-2 bg-gray-800">
      <div className="flex flex-col h-full">
        <div className="self-center px-8 py-4 text-white font-semibold font-sans">
          Menu
        </div>
        <NavLink to="/">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Home
          </div>
        </NavLink>
        <NavLink to="/dashboard">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/propietarios">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Gestion de propietarios
          </div>
        </NavLink>
        <NavLink to="/empleados">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Gestion de Empleados
          </div>
        </NavLink>
        <NavLink to="/presupuestos">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Presupuesto
          </div>
        </NavLink>
        <NavLink to="/gastos">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Gastos
          </div>
        </NavLink>
        <NavLink to="/multas">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Multas
          </div>
        </NavLink>
        <NavLink to="/cuotas">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Cuotas
          </div>
        </NavLink>
        <NavLink to="/notificacion">
          <div className="px-8 py-2 text-white hover:bg-white hover:text-slate-950 capitalize hover:cursor-pointer font-sans">
            Notificacion
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export { Navbar };
