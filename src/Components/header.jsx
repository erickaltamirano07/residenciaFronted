import React from "react";

function Header() {
  return (
    <div className="col-span-10 bg-white rounded-bl-lg rounded-br-lg shadow-2xl">
      <div className="flex justify-center items-center h-full space-x-4">
        <h1 className="text-gray-800 font-semibold font-sans capitalize text-2xl">
          Conjunto Benalcazar
        </h1>
      </div>
    </div>
  );
}

export { Header };
