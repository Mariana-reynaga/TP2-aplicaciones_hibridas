import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Button from "../../components/Button";

function Details(){
    const { id } = useParams();

    const [detalle, setDetalle] = useState([]);

    useEffect( ()=>{
        const getGato = async() =>{
            const endpoint = await import.meta.env.VITE_FIND_ONE+id;

            const res = await fetch(endpoint);

            const detalle = await res.json();
            
            setDetalle(detalle.data);
        }
        getGato();
    }, []);

    return(
        <div className="mt-24">
            <div className="flex justify-center items-center my-10 h-full">
                <div className="flex w-4/5">
                    <div className="w-1/2">
                        <h1 className="text-black text-2xl font-bold">{ detalle.name }</h1>
                        <div className="flex flex-col">
                            <p className="mt-3">El { detalle.name } es originiario de { detalle.origin }.</p>
                            {
                                detalle.coat_length === "bald" ? (
                                    <p className="mt-3">Son pelados, generalmente de color rosado por su piel.</p> 
                                ) : (
                                    <p className="mt-3">Tienen un pelaje { detalle.coat_length }, generalmente de color { detalle.possible_color }.</p>
                                )
                            }  
                                
                        </div>
                        
                        <div className="flex mt-10">
                            <Button link="" title="Eliminar" />
                            <Button link="" title="Editar" />
                        </div>

                    </div>

                    <div className="w-1/2 h-98">
                            <img src={detalle.img_url} style={{height: 500 + 'px'}} />
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="bg-black w-full min-h-10 p-4 fixed bottom-0 z-0 mt-10">
                <p className='text-white'>Mariana reynaga - DWM4AP - Aplicaciones Hibridas</p>
            </div>
        </div>
    )
}

export default Details;