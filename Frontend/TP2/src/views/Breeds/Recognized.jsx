import React from 'react';
import TarjetaGato from '../../components/TarjetaGato'
import Button from '../../components/Button';

import { useState, useEffect } from 'react';

function Recognized(){
    const [gatos, setGatos] = useState([]);

    useEffect( ()=>{
        const getGatos = async()=>{
            const endpoint = await import.meta.env.VITE_ALL_RECOGNIZED;

            const res = await fetch(endpoint);

            const gatos = await res.json();
            
            setGatos(gatos.data);
        }

        getGatos();
    }, [])

    return(
        <div className='mt-24'>
            <div className="flex justify-center">
                <div className="w-4/5">
                    <div className="flex flex-col ">
                        <h1 className='text-black text-2xl mb-3'>Razas reconocidas</h1>
                        <p>Razas reconocidas por la FIF</p>
                    </div>

                </div>

            </div>

            <div className="flex justify-center my-10">
                <div className="w-4/5">
                    <div className="grid grid-cols-3 gap-x-2 gap-y-6">
                        {   
                            gatos.map( gato=>(
                                <TarjetaGato 
                                    key={gato._id}
                                    img={gato.img_url}
                                    alt={gato.alt} 
                                    title={gato.name} 
                                    id={gato._id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recognized;