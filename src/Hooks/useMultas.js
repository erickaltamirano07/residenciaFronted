import {useState, useEffect} from "react";

const useMultas=()=>{
    
    const [multas, setMultas] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [editEmpleados, setEditEmpleado] = useState([]);
    
    let searchedMultas = [];
    const uri = 'http://localhost:8762/ms-multa/multa';
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setMultas(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


     if (!searchValue.length >= 1) {
        searchedMultas = multas;
    } else {
        searchedMultas = multas.filter(item => {
            const multaMotivo = item.motivo.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return multaMotivo.includes(searchText);
        });

    }


    const removeMultas = (payload) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch(uri+"/"+ payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...multas];
                    const x = newItem.filter(item => item.id !== payload.id);
                setMultas(x);
                alert("Elemento eliminado")
            });       
    }

    const postMulta = (payload) => {        
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {
                    motivo: payload.motivo.toString(),
                    total: parseFloat(payload.total),
                    pagado: payload.pagado,
                    propietario: payload.propietario.toString()                
                }
            }
            )
        };

        fetch(uri, requestOptions)
            .then(response => response.json())    
            .then(data => {                
                    let newItem=[...multas];
                    newItem.push(data);
                    setMultas(newItem);
                    console.log(data)
            });        
    }

    const putMulta = (id, payload) => {       
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    motivo: payload.motivo.toString(),
                    total: parseFloat(payload.total),
                    pagado: payload.pagado,
                    propietario: payload.propietario.toString()                 
                }
            }
            )
        };

        fetch(uri+"/"+id, requestOptions)
            .then(response => response.json())    
            .then(data => {             

                const newItems = [...multas];                
                const multaIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[multaIndex].motivo = data.motivo;
                newItems[multaIndex].total = data.total;
                newItems[multaIndex].pagado = data.pagado;
                newItems[multaIndex].propietario = data.propietario;
                setMultas(newItems);
                alert("Elemento modificado")
            });        
    }

    return {
        multas,
        setMultas,
        searchedMultas,
        setSearchValue,
        removeMultas,
        postMulta,
        putMulta
        
    }

}

export {useMultas};