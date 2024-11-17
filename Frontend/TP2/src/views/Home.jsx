import TarjetaGato from '../components/TarjetaGato'
import { useState, useEffect} from 'react';
function Home(){
    const [trandomRec, setTrandomRec] = useState([]);
    const [trandomExp, setTrandomExp] = useState([]);

    useEffect( ()=>{
        const getRandomR = async()=>{
            const endpoint = import.meta.env.VITE_TRES_RANDOM_RECOG;

            const res = await fetch(endpoint);

            const trandomRec = await res.json();

            setTrandomRec(trandomRec.data);
        }

        const getRandomE = async()=>{
            const endpoint = import.meta.env.VITE_TRES_RANDOM_EXPER;

            const res = await fetch(endpoint);

            const trandomExp = await res.json();

            setTrandomExp(trandomExp.data);
        }

        getRandomR();
        getRandomE();

    }, [])

    return(
        <div className='mt-36'>
            {/* Banner de inicio */}
            <div className="flex justify-center mb-10">

                <div className="bg-primary w-4/5 p-6 flex items-center rounded-md">
                    <div className="w-2/3 h-full flex flex-col justify-evenly">
                        <p>Michi REST permite la búsqueda, creación, actualización y eliminación de razas de gatos reconocidos por la Fédération Internationale Féline (FIF) además de razas experimentales.</p>
                        <p>Tambien, sin cargo extra, foto del gato de mi amigo: <span>Argo</span></p>
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <img src="/img/argo.jpeg" alt="" className='h-60'/>
                    </div>
                </div>

            </div>

            {/* 3 gatos reconocidos random */}
            <div className="flex flex-wrap justify-center mb-10">
                <div className="w-4/5 flex flex-col">
                    <h2 className='text-xl mb-6 font-bold' >Reconocidas</h2>
                    <div className="flex flex-row justify-evenly flex-wrap">
                        {   
                            trandomRec.map( gato=>(
                                <TarjetaGato 
                                    key={gato._id}
                                    title={gato.name} 
                                    img={gato.img_url}
                                    alt={gato.alt} 
                                    id={gato._id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            
            {/* 3 gatos experimentales random */}
            <div className="flex flex-wrap justify-center mb-10">
                <div className="w-4/5 flex flex-col">
                    <h2 className='text-xl mb-6 font-bold'>Experimentales</h2>
                    <div className="flex flex-row justify-evenly flex-wrap">
                        {   
                            trandomExp.map( gato=>(
                                <TarjetaGato 
                                    key={gato._id}
                                    title={gato.name} 
                                    img={gato.img_url}
                                    alt={gato.alt} 
                                    id={gato._id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="bg-black w-full min-h-10 p-4">
                <p className='text-white'>Mariana reynaga - DWM4AP - Aplicaciones Hibridas</p>
            </div>
        </div>
    )
}

export default Home;