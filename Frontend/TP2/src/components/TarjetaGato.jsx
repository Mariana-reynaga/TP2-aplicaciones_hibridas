import React from "react";

function TarjetaGato(props) {
    return(
        <div className="bg-secondary w-72 p-4 rounded-md">
            <img src={ props.img } alt={ props.alt } />
            <h3 className='text-center font-xl mt-4'>{ props.title }</h3>
        </div>
    )
}

export default TarjetaGato;