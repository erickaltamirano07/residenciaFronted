import React, { useContext, useEffect, useState } from "react";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Layout } from "../Components/layout";

function NewCuota() {
  const { cuotas, propietarios, cuotasHome } = useContext(ResidenciaContext);
  const [pagado, setPagado] = useState(false);
  const [estado, setEstado] = useState("Enviar");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onChange = () => {
    setPagado(!pagado);
  };
  const onSubmit = (data) => {
    propietarios.propietarios.map((item) => {
      data.propietario = parseInt(item.id);
      cuotas.postCuota(data);
    });

    setEstado("Enviando...");
    const timer = setTimeout(() => {
      cuotas.getCuotas();
      cuotasHome.actulizarCuotas();
      setEstado("Enviar");
      navigate("/cuotas");
    }, 5000);
    return () => clearTimeout(timer);
  };

  const onCancel = () => {
    navigate("/cuotas");
  };
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const anio = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex items-center justify-center"
          >
            <div className="grid grid-cols-1 w-1/3 gap-5">
              <label>Crear Cuota</label>

              <div className="relative h-11 w-full min-w-[200px]">
                <select
                  {...register("mes", {
                    required: "Es requerido",
                  })}
                  aria-invalid={errors.mes ? "true" : "false"}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                >
                  {meses.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.mes && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.mes.message}
                  </p>
                )}
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mes
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <select
                  {...register("anio", {
                    required: "Es requerido",
                  })}
                  aria-invalid={errors.anio ? "true" : "false"}
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                >
                  {anio.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.anio && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.anio.message}
                  </p>
                )}
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Año
                </label>
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="number"
                  min="0"
                  max="1000"
                  step={0.01}
                  {...register("valor", {
                    min: 0,
                    max: 1000,
                    required: "Valor es requerido",
                  })}
                  aria-invalid={errors.valor ? "true" : "false"}
                  placeholder="Valor"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                {errors.valor && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.valor.message}
                  </p>
                )}
                {
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Valor
                  </label>
                }
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="checkbox"
                  checked={pagado}
                  onClick={onChange}
                  {...register("pagado")}
                  aria-invalid={errors.pagado ? "true" : "false"}
                  placeholder="Pagado"
                  className="peer h-1/2 w-1/2 border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />

                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all ">
                  Pagado
                </label>
              </div>

              <input
                type="submit"
                value={estado}
                className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
              />
              <button
                type="button"
                className="bg-red-600 px-8 py-2 rounded-lg text-white hover:bg-red-700"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export { NewCuota };
