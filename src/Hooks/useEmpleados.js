import {useState, useEffect} from "react";

const useEmpleados=()=>{
    
    const [empleados, setEmpleados] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [editEmpleados, setEditEmpleado] = useState([]);
    
    let searchedEmpleado = [];
    const uri = 'http://localhost:8762/ms-empleado/empleado';
    

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "GET"  })
        };
        fetch(uri, requestOptions)
            .then(response => response.json())
            .then(data => setEmpleados(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


     if (!searchValue.length >= 1) {
        searchedEmpleado = empleados;
    } else {
        searchedEmpleado = empleados.filter(item => {
            const empleadoName = item.nombre.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return empleadoName.includes(searchText);
        });

    }


    const removeEmpleado = (payload) => {

         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetMethod: "DELETE"  })
        };
        fetch(uri+"/"+ payload.id, requestOptions)            
            .then(data => {                
                    const newItem = [...empleados];
                    const x = newItem.filter(item => item.id !== payload.id);
                setEmpleados(x);
                alert("Elemento eliminado")
            });       
    }

 const postEmpleado = (payload) => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "POST",                
                body: {
                    nombre: payload.nombre.toString(),
                    apellido: payload.apellido.toString(),
                    salario: parseFloat(payload.salario),
                    cargo: payload.cargo.toString()                
                }
            }
            )
        };

        fetch(uri, requestOptions)
            .then(response => response.json())    
            .then(data => {                
                    let newItem=[...empleados];
                    newItem.push(data);
                    setEmpleados(newItem);
                    console.log(data)
            });        
    }

    const putEmpleado = (id, payload) => {       
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                targetMethod: "PUT",                
                body: {
                    nombre: payload.nombre.toString(),
                    apellido: payload.apellido.toString(),
                    salario: parseFloat(payload.salario),
                    cargo: payload.cargo.toString()                 
                }
            }
            )
        };

        fetch(uri+"/"+id, requestOptions)
            .then(response => response.json())    
            .then(data => {             

                const newItems = [...empleados];                
                const empleadoIndex = newItems.findIndex(x => x.id === data.id);                
                newItems[empleadoIndex].nombre = data.nombre;
                newItems[empleadoIndex].apellido = data.apellido;
                newItems[empleadoIndex].salario = data.salario;
                newItems[empleadoIndex].cargo = data.cargo;
                setEmpleados(newItems);
                alert("Elemento modificado")
            });        
    }

    return {
        empleados,
        setEmpleados,
        searchedEmpleado,
        setSearchValue,
        removeEmpleado,
        postEmpleado,
        putEmpleado
        
    }

}

export {useEmpleados};