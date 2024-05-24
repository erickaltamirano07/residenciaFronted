import React, { useContext, useState, useRef } from "react";
import { Layout } from "../Components/layout";
import { ResidenciaContext } from "../Context/residenciaContext";
import { useForm } from "react-hook-form";
import { resolve } from "path-browserify";

function Notificacion() {
  const [valueEmail, setValueEmail] = useState("");
  const [valueAttachment, setValueAttachment] = useState({
    attachment: "",
    recipient: "",
    msgBody: "",
    subject: "",
  });
  const { propietarios } = useContext(ResidenciaContext);
  const { notificacion } = useContext(ResidenciaContext);

  const onSearchValueChange = (event) => {
    propietarios.setSearchValue(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.attachment.length == 0) {
      notificacion.enviar(data, false);
    } else {
      const newItems = valueAttachment;
      newItems.subject = data.subject;
      newItems.recipient = data.recipient;
      newItems.msgBody = data.msgBody;

      setValueAttachment(newItems);
      notificacion.enviar(valueAttachment, true);
    }
  };

  const onSelect = (event) => {
    if (valueEmail === "") {
      setValueEmail(event.target.value);
    } else {
      setValueEmail(valueEmail + "," + event.target.value);
    }
  };

  const onArchivo = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const tamanio = event.target.files.length;
    if (tamanio === 0) {
      console.log("sin adjunto");
    } else {
      getBase64(file)
        .then((res) => {
          const newItems = valueAttachment;
          newItems.attachment = res;
          setValueAttachment(newItems);
        })
        .catch((err) => console.log(err));
    }
  };

  async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }

  return (
    <Layout>
      <div className=" p-4 h-full">
        <div className="p-5 bg-white container h-full rounded-lg space-y-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex items-center justify-around space-x-4"
          >
            <div className="w-2/6 h-4/5 flex flex-col space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="outline outline-offset-1 outline-1 rounded-lg"
                  onChange={onSearchValueChange}
                  cols="40"
                  rows="5"
                />
              </div>
              <div className="h-full">
                <select
                  onChange={onSelect}
                  name="correos"
                  multiple={true}
                  className="w-full h-full  outline outline-offset-1 outline-1 rounded-md"
                >
                  {propietarios.searchedPropietario.length > 0 ? (
                    propietarios.searchedPropietario.map((item) => (
                      <option key={item.id} value={item.correo}>
                        {item.nombre} {item.apellido}
                      </option>
                    ))
                  ) : (
                    <option value="">No se encuentran resultados</option>
                  )}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 w-4/6 gap-5">
              <div className="relative h-10 w-full min-w-[200px] flex space-y-1">
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Para:
                </label>
                <textarea
                  {...register("recipient")}
                  type="mail"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                  defaultValue={valueEmail}
                  placeholder="Email"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  {...register("subject")}
                  type="text"
                  placeholder="Asunto"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Asunto:
                </label>
              </div>
              <div className="relative h-48 w-full min-w-[200px]">
                <textarea
                  {...register("msgBody")}
                  type="text"
                  placeholder="Mensaje"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mensaje
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="file"
                  {...register("attachment")}
                  className="peer h-full w-full"
                  onChange={onArchivo}
                />
              </div>
              <div>
                <input
                  type="submit"
                  className="bg-green-600 px-8 py-2 rounded-lg text-white hover:bg-green-700"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export { Notificacion };
