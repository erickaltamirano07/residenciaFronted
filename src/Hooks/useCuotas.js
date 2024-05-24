import {useState, useEffect} from "react";

const useCuotas=()=>{
    
    const [cuotas, setCuotas] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [anios, setAnios] = useState('2022');
    
    let searchedCuotas = [];
    const uri = 'http://localhost:8762/ms-cuota/cuota';
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setCuotas(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const getCuotas = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => {
                setCuotas(data);                
             });
        
    }


    if (!searchValue.length >= 1) {         
        searchedCuotas = cuotas.filter(item => item.anio == anios);        
    } else {
        const x = cuotas.filter(item => {
            const cuotaMes = item.mes.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return cuotaMes.includes(searchText);   
        });
        searchedCuotas= x.filter(item => item.anio == anios);
    }


    const removeCuotas = (payload) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch(uri+"/"+ payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...cuotas];
                    const x = newItem.filter(item => item.id !== payload.id);
                setCuotas(x);
                alert("Elemento eliminado")
            });       
    }

    const postCuota = (payload) => {        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {
                    mes: payload.mes.toString(),
                    anio: payload.anio.toString(),
                    valor: parseFloat(payload.valor),
                    pagado: payload.pagado,
                    propietario: parseInt(payload.propietario)
                }
            }
            )
        };

        fetch(uri, requestOptions)
            .then(response => response.json());
       // getCuotas();       
                    
    }

    const putCuota = (id, payload) => {       
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    mes: payload.mes.toString(),
                    anio: payload.anio.toString(),
                    valor: parseFloat(payload.valor),
                    pagado: payload.pagado,
                    propietario: parseInt(payload.propietario)                 
                }
                
            }
            )
        };

        fetch(uri+"/"+id, requestOptions)
            .then(response => response.json())    
            .then(data => {             

                const newItems = [...cuotas];                
                const cuotaIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[cuotaIndex].mes = data.mes;
                newItems[cuotaIndex].anio = data.anio;
                newItems[cuotaIndex].pagado = data.pagado;
                newItems[cuotaIndex].propietario = data.propietario;
                newItems[cuotaIndex].valor = data.valor;
                setCuotas(newItems);
                alert("Elemento modificado")
            });        
    }

    return {
        cuotas,
        setCuotas,
        searchedCuotas,
        setSearchValue,
        removeCuotas,
        postCuota,
        putCuota,
        getCuotas,
        setAnios
        
    }

}

export {useCuotas};