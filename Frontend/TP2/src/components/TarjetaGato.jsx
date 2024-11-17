import React from "react";
import { Link } from "react-router-dom";

function TarjetaGato(props) {
    return(
        <div className="bg-secondary w-72 p-4 rounded-md">
            <img src={ props.img } alt={ props.alt } className="h-48 w-full"/>
            <div className="flex flex-col items-center justify-center">
                <h3 className='font-xl mt-4'>{ props.title }</h3>
                <Link to={`/details/${props.id}`} className="bg-primary px-6 py-2 rounded-lg">Detalle</Link>
            </div>
        </div>
    )
}

export default TarjetaGato;