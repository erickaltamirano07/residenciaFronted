import { useState, useEffect } from "react";

const usePresupuesto = () => {
  const [presupuestos, setPresupuesto] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    
    let searchedPresupuesto = [];
    const uri = 'http://localhost:8762/ms-presupuesto/presupuesto';
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setPresupuesto(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


     if (!searchValue.length >= 1) {
        searchedPresupuesto = presupuestos;
    } else {
        searchedPresupuesto = presupuestos.filter(item => {
            const empleadoAnio = item.anio;
            const searchText = searchValue;
            return empleadoAnio.includes(searchText);
        });

    }


    const getPresupuesto = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
         fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setPresupuesto(data));

    }


    const removePresupuesto = (payload) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch(uri+"/"+ payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...presupuestos];
                    const x = newItem.filter(item => item.id !== payload.id);
                setPresupuesto(x);
                alert("Elemento eliminado")
            });       
    }

 const postPresupuesto = (payload) => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {                    
                    total: parseFloat(payload.total),
                    parcial: parseFloat(payload.parcial),
                    anio: payload.anio.toString()                  
                }
            }
            )
        };

        fetch(uri, requestOptions)
            .then(response => response.json())    
            .then(data => {                
                    let newItem=[...presupuestos];
                    newItem.push(data);
                    setPresupuesto(newItem);
                    console.log(data)
            });        
    }

    const putPresupuesto = (id, payload) => {       
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    
                    total: parseFloat(payload.total),
                    parcial: parseFloat(payload.parcial),
                    anio: payload.anio.toString()                   
                }
            }
            )
        };

        fetch(uri+"/"+id, requestOptions)
            .then(response => response.json())    
            .then(data => {             

                const newItems = [...presupuestos];                
                const presupuestoIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[presupuestoIndex].total = data.total;
                newItems[presupuestoIndex].parcial = data.parcial;
                newItems[presupuestoIndex].anio = data.anio;                
                setPresupuesto(newItems);
                alert("Elemento modificado")
            });        
    }

    return {
        presupuestos,
        setPresupuesto,
        searchedPresupuesto,
        setSearchValue,
        removePresupuesto,
        postPresupuesto,
        putPresupuesto,
        getPresupuesto
        
    }

}
export { usePresupuesto };
