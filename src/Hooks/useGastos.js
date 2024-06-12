import {useState, useEffect} from "react";

const useGastos = () => {
    
    const [gastos, setGastos] = useState([]);
    const [searchValue, setSearchValue] = useState('');   
    
    let searchedGasto = [];
    const uri = 'http://localhost:8762/ms-gasto/gasto';
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setGastos(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


     if (!searchValue.length >= 1) {
        searchedGasto = gastos;
    } else {
        searchedGasto = gastos.filter(item => {
            const gastoAnio = item.anio;
            const searchText = searchValue;
            return gastoAnio.includes(searchText);
        });

    }


    const removeGasto = (payload, presupuesto, contexto) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch(uri+"/"+ payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...gastos];
                    const x = newItem.filter(item => item.id !== payload.id);
                setGastos(x);
                presupuesto.getPresupuesto();
                contexto.actualizarGastos();
                alert("Elemento eliminado")
            });       
    }

    const postGasto = (payload, presupuesto, contexto) => {
        const fecha = payload.Fecha.split("-");
     
        const dia = fecha[2];
        const mes=fecha[1];
        const anio=fecha[0];
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {
                    dia : dia.toString(),
                    mes : mes.toString(),
                    anio : anio.toString(),
                    motivo : payload.Motivo.toString(),
                    valor : parseFloat(payload.Valor)                
                }
            }
            )
        };

        fetch(uri, requestOptions)
            .then(response => response.json())    
            .then(data => {                
                    let newItem=[...gastos];
                    newItem.push(data);
                setGastos(newItem);
                presupuesto.getPresupuesto();
                contexto.actualizarGastos();
            });
        
        
    }

    const putGasto = (id, payload, presupuesto, contexto) => {     
        
        const fecha = payload.Fecha.split("-");     
        const dia = fecha[2];
        const mes=fecha[1];
        const anio=fecha[0];
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    dia : dia.toString(),
                    mes : mes.toString(),
                    anio : anio.toString(),
                    motivo : payload.Motivo.toString(),
                    valor : parseFloat(payload.Valor)                 
                }
            }
            )
        };

        fetch(uri+"/"+id, requestOptions)
            .then(response => response.json())    
            .then(data => {
                const newItems = [...gastos];                
                const gastoIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[gastoIndex].dia = data.dia;
                newItems[gastoIndex].mes = data.mes;
                newItems[gastoIndex].anio = data.anio;
                newItems[gastoIndex].motivo = data.motivo;
                newItems[gastoIndex].valor = data.valor;
                setGastos(newItems);
                presupuesto.getPresupuesto();
                contexto.actualizarGastos();
                alert("Elemento modificado")
            });
        
        
    }

    return {
        gastos,
        setGastos,
        searchedGasto,
        setSearchValue,
        removeGasto,
        postGasto,
        putGasto        
    }

}

export {useGastos};