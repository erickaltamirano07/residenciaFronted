import React, { useState } from "react";
import { Layout } from "./layout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function FormPresupuesto(props) {
  const [total, setTotal] = useState(props.total || "");
  const [parcial, setParcial] = useState(props.parcial || "");
  const [anio, setAnio] = useState(props.anio || "");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.submitEvent(data);
    navigate("/presupuestos");
  };
  const onCancel = () => {
    navigate("/presupuestos");
  };

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex items-center justify-center"
          >
            <div className="grid grid-cols-1 w-1/3 gap-5">
              <label>{props.label}</label>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={total}
                  type="number"
                  min="0"
                  max="50000"
                  step={0.01}
                  {...register("total", {
                    min: 0,
                    max: 50000,
                    required: "Total es requerido",
                  })}
                  aria-invalid={errors.total ? "true" : "false"}
                  placeholder="Total"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                {errors.total && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.total.message}
                  </p>
                )}
                {
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Total
                  </label>
                }
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  defaultValue={parcial}
                  type="number"
                  min="0"
                  max="50000"
                  step={0.01}
                  {...register("parcial", {
                    min: 0,
                    max: 50000,
                    required: "Parcial es requerido",
                  })}
                  aria-invalid={errors.parcial ? "true" : "false"}
                  placeholder="Parcial"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                {errors.parcial && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.parcial.message}
                  </p>
                )}
                {
                  <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Parcial
                  </label>
                }
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="number"
                  min="2000"
                  max="5000"
                  defaultValue={anio.toString()}
                  {...register("anio", {
                    min: 2000,
                    max: 5000,
                    required: "Es requerido",
                  })}
                  aria-invalid={errors.anio ? "true" : "false"}
                  placeholder="Año"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                {errors.anio && (
                  <p role="alert" className="text-[11px] text-red-600">
                    {errors.anio.message}
                  </p>
                )}
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Año
                </label>
              </div>

              <input
                type="submit"
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
export { FormPresupuesto };
