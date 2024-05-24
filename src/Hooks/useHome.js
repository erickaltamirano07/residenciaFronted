import { useState, useEffect } from "react";

const useHome = () => { 

  const uri = "http://localhost:8762/ms-presupuesto/presupuesto";
  const uriMulta = 'http://localhost:8762/ms-multa/multa';
     const [presupuestoAnio, setPresupuestoAnio] = useState([
    {
      id: 0,
      total: 0,
      parcial: 0,
      anio: "0",
    },
     ]);
  
  const [multaAnio, setMultaAnio] = useState(0);
    
     useEffect(() => {
    var y = new Date().getFullYear();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET",
        queryParams: {
          anio: [y.toString()],
        },
      }),
    };

    fetch(uri, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPresupuestoAnio(data);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
     }, []);
  
   useEffect(() => {
     var year = new Date().getFullYear();
     var elementos = [];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetMethod: "GET"
      }),
    };

    fetch(uriMulta, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data.forEach(element => {
          const t = element.fecha.split("-");  
          if(t[0]==year.toString() && element.pagado==true){
            elementos.push(element.total)
            }
          });        
        setMultaAnio(elementos.reduce((a, b) => a+ b, 0));
        
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
     }, []);
  
  
    
    return {
      presupuestoAnio,
      multaAnio
    }
}

export { useHome };