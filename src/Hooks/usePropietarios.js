
import {useState, useEffect} from "react";

const usePropietarios=()=>{
    
    const [propietarios, setPropietarios] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [editPropietrario, setEditPropietario] = useState([]);
    
    let searchedPropietario = [];
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch('http://localhost:8762/ms-propietario/propietario', requestOptions)
            .then(response => response.json())
            .then(data => setPropietarios(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


     if (!searchValue.length >= 1) {
        searchedPropietario = propietarios;
    } else {
        searchedPropietario = propietarios.filter(item => {
            const propietarioName = item.nombre.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return propietarioName.includes(searchText);
        });

    }


    const removePropietario = (payload) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch('http://localhost:8762/ms-propietario/propietario/' + payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...propietarios];
                    const x = newItem.filter(item => item.id !== payload.id);
                setPropietarios(x);
                alert("Elemento eliminado")
            });       
    }

    const postPropietario = (payload) => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {
                    nombre: payload.nombre.toString(),
                    apellido: payload.apellido.toString(),
                    casaNumero: parseInt(payload.casaNumero),
                    correo: payload.correo.toString()                
                }
            }
            )
        };

        fetch('http://localhost:8762/ms-propietario/propietario', requestOptions)
            .then(response => response.json())    
            .then(data => {                
                    let newItem=[...propietarios];
                    newItem.push(data);
                    setPropietarios(newItem);
                    console.log(data)
            });        
    }

    const putPropietario = (id, payload) => {       
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    nombre: payload.nombre.toString(),
                    apellido: payload.apellido.toString(),
                    casaNumero: parseInt(payload.casaNumero),
                    correo: payload.correo.toString()                
                }
            }
            )
        };

        fetch('http://localhost:8762/ms-propietario/propietario/'+id, requestOptions)
            .then(response => response.json())    
            .then(data => {             

                const newItems = [...propietarios];                
                const propietarioIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[propietarioIndex].nombre = data.nombre;
                newItems[propietarioIndex].apellido = data.apellido;
                newItems[propietarioIndex].casaNumero = data.casaNumero;
                newItems[propietarioIndex].correo = data.correo;
                setPropietarios(newItems);
                alert("Elemento modificado")
            });        
    }

    return {
        propietarios,
        setPropietarios,
        searchedPropietario,
        setSearchValue,
        removePropietario,
        postPropietario,
        putPropietario
        
    }

}

export {usePropietarios};