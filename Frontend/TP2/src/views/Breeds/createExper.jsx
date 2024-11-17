import { useState } from 'react';

function CreateExper(){
    const [formData, setFormData] = useState({name:'', origin:'', coat_length:'', possible_color:'', img_url:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'});

    const handleInput = (e) =>{
        const {name, value} = e.target;

        setFormData( {...formData, [name]:value } );
    }

    const submitForm = async(e) =>{
        e.preventDefault();

        try {
            console.log("enviando form");
            
            const endpoint = import.meta.env.VITE_ALL_EXPERIMENTAL;

            const config = {
                headers:{
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            }

            const res = await fetch(endpoint, config);

            if ( !res.ok ) {
                alert('Uno de los datos es incorrecto');
                console.log("hubo un error", res);

            }else{
                const data = await res.json();
                
                setFormData({name:'', origin:'', coat_length:'', possible_color:'', img_url:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'});
            }


        } catch (error) {
            alert('error del servidor', error);
        }
    }

    return(
        <div className="mt-24 flex justify-center">
            <div className="w-4/5 flex-col">
                <h1 className="text-black text-2xl font-bold">Crear raza Experimental</h1>

                <form onSubmit={submitForm}>
                    <div className="flex mt-5">
                        <div className="w-1/2">
                            <div className="w-4/5 min-h-fit h-60 flex flex-col justify-between">
                                {/* nombre */}
                                <div className="flex flex-col">
                                    <label htmlFor="name">Nombre</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        class="
                                            border
                                            border-solid
                                            border-gray-600
                                            rounded-md
                                            p-2
                                            w-full
                                            focus:outline
                                            focus:outline-2
                                            focus:outline-primary
                                            mt-2
                                        "
                                        value={formData.name}
                                        onChange={handleInput}
                                    />
                                </div>

                                {/* origen */}
                                <div className="flex flex-col">
                                    <label htmlFor="origin">Origen</label>
                                    <input 
                                        type="text" 
                                        name="origin" 
                                        id="origin"
                                        class="
                                            border
                                            border-solid
                                            border-gray-600
                                            rounded-md
                                            p-2
                                            w-full
                                            focus:outline
                                            focus:outline-2
                                            focus:outline-primary
                                            mt-2
                                        "
                                        value={formData.origin}
                                        onChange={handleInput}
                                    />
                                </div>

                                {/* imagen */}
                                <div className="flex flex-col">
                                    <label htmlFor="img_url">Imagen</label>
                                    <input 
                                        type="text" 
                                        name="img_url" 
                                        id="img_url"
                                        class="
                                            border
                                            border-solid
                                            border-gray-600
                                            rounded-md
                                            p-2
                                            w-full
                                            focus:outline
                                            focus:outline-2
                                            focus:outline-primary
                                            mt-2
                                        "
                                        value={formData.img_url}
                                        onChange={handleInput}
                                    />
                                </div>
                            
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-4/5 h-40 flex flex-col justify-between ">
                                {/* Largo de pelo */}
                                <div className="flex flex-col">
                                    <label htmlFor="coat_length">Largo de pelo</label>

                                    <select 
                                        name="coat_length" 
                                        id="coat_length" 
                                        class="
                                            border
                                            border-solid
                                            border-gray-600
                                            rounded-md
                                            p-2
                                            w-full
                                            focus:outline
                                            focus:outline-2
                                            focus:outline-primary
                                            mt-2"
                                        value={formData.coat_length}
                                        onChange={handleInput}
                                        >
                                        <option value="">Elegir una</option>
                                        <option value="short">Corto</option>
                                        <option value="long">Largo</option>
                                        <option value="bald">Sin pelo</option>
                                    </select>
                                </div>

                                {/* color de pelo */}
                                <div className="flex flex-col">
                                    <label htmlFor="possible_color">Color de pelo</label>

                                    <select 
                                        name="possible_color" 
                                        id="possible_color"
                                        class="
                                            border
                                            border-solid
                                            border-gray-600
                                            rounded-md
                                            p-2
                                            w-full
                                            focus:outline
                                            focus:outline-2
                                            focus:outline-primary
                                            mt-2"
                                        value={formData.possible_color}
                                        onChange={handleInput}
                                    >
                                        <option value="">Elegir uno</option>
                                        <option value="white">Blanco</option>
                                        <option value="black">Negro</option>
                                        <option value="tabby">Tabby</option>
                                        <option value="blue">Azul</option>
                                        <option value="brown">Marron</option>
                                        <option value="calico">Tricolor</option>
                                        <option value="rosette">Rosette</option>
                                        <option value="none">Ninguno</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>

                <button type='submit' className='bg-secondary px-4 py-2 rounded-md mt-10'>Crear</button>
                </form>

            </div>
        </div>
    )
}

export default CreateExper;