import { useState, useEffect } from "react";

const useHomePresupuesto = () => {
    const [presupuesto, setPresupuesto] = useState([]);
    const uri = 'http://localhost:8762/ms-presupuesto/presupuesto';
    

  useEffect(() => {
    var y = new Date().getFullYear();
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
        queryParams: {
          anio: [y],
        },
      }),
    };
    fetch(uri, requestOptions)
      .then((response) => response.json())
          .then((data) => setPresupuesto(data))
      .catch(()=>setPresupuesto([{total: 0}]));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
    
    const actualizarPresupuesto = () => {
        
        var y = new Date().getFullYear();
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
        queryParams: {
          anio: [y],
        },
      }),
    };
    fetch(uri, requestOptions)
      .then((response) => response.json())
        .then((data) => setPresupuesto(data))
      .catch(()=>setPresupuesto([{total: 0}]));        
    }
    

  return {
      presupuesto,
      actualizarPresupuesto
  };
};
export { useHomePresupuesto };
