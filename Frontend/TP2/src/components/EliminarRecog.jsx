import React from "react";

function Button({id}) {
    
    const deleteCat = async(e) =>{
        e.preventDefault();

        try {
            console.log("Enviando request de eliminar");
            
            const endpoint = import.meta.env.VITE_DELETE_ONE+id;

            console.log("el endpoint: ",endpoint);

            const config = {
                headers:{
                    'Content-type': 'application/json'
                },
                method: 'DELETE',
            }

            const res = await fetch(endpoint, config);

            if ( !res.ok ) {
                console.log("hubo un error", res);

            }else{
                const data = await res.json();
                console.log("eliminado");
            }


        } catch (error) {
            alert('error del servidor');
            console.error(error);
        }
    }

    return(
        <form onSubmit={deleteCat}>
            <button type="submit" className="bg-secondary px-4 py-2 rounded-md me-4">Eliminar</button>
        </form>
    )
}

export default Button;