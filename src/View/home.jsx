import React, { useState } from "react";
import { Layout } from "../Components/layout";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/16/solid";

function Home() {
  //const { homes } = useContext(ResidenciaContext);
  const [slides, setSlides] = useState([
    "https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/434139/pexels-photo-434139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1510173/pexels-photo-1510173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ]);
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <Layout>
      <div className="flex w-full h-1/2 justify-center">
        <div className="overflow-hidden relative py-4 w-2/3  h-full">
          <div
            className={`flex transition ease-out duration-500 `}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s, i) => {
              return <img src={s} key={i} />;
            })}
          </div>

          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={previousSlide}>
              <ArrowLeftCircleIcon className="w-5" />
            </button>
            <button onClick={nextSlide}>
              <ArrowRightCircleIcon className="w-5" />
            </button>
          </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full ">
            {slides.map((s, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full h-1/2 justify-around py-4 items-center">
        <div className="basis-1/4 ">
          <img
            src="https://images.pexels.com/photos/250659/pexels-photo-250659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Condominio"
            className="rounded-full hover:translate-y-6 hover:scale-125 hover:duration-300"
          />
        </div>
        <div className="basis-1/4">
          <img
            src="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Condominio"
            className="rounded-full hover:translate-y-6 hover:scale-125 hover:duration-300"
          />
        </div>
        <div className="basis-1/4">
          <img
            src="https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Condominio"
            className="rounded-full hover:translate-y-6 hover:scale-125 hover:duration-300"
          />
        </div>
      </div>
    </Layout>
  );
}

export { Home };
