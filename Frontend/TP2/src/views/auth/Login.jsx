import { useState, useEffect} from 'react';

function Login(){
    const [user, setUser] = useState({email:'', password:''});
    
    const handleInput = (e) =>{
        const {name, value} = e.target;

        setUser( {...user, [name]:value } );
    }

    const submitForm = async(event) =>{
        event.preventDefault();
        try {
            console.log("enviando form");
            
            const endpoint = import.meta.env.VITE_LOGIN_USER;

            const config = {
                headers:{
                    'Content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user)
            }

            const res = await fetch(endpoint, config);

            if ( !res.ok ) {
                alert('Uno de los datos es incorrecto');
                console.log("hubo un error", res);
                
            }else{
                const data = await res.json();
                console.log("bienvenido ",data);
                setUser({email:'', password:''});
            }


        } catch (error) {
            alert('error del servidor', error);
        }
        
    }

    return(
        <div className="mt-24 flex justify-center">
            <div className="w-4/5 flex justify-center">
                <div className="bg-secondary p-6 rounded-lg w-1/3 mt-10">
                    <h1 className='text-black text-2xl font-bold mb-5'>Inicia sesión</h1>

                    <form onSubmit={ submitForm }>
                        <div className="flex flex-col justify-between my-5 h-14">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                className="ps-2" 
                                value={user.email} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="flex flex-col justify-between mt-5 mb-2 h-14">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                className="ps-2"
                                value={user.password} 
                                onChange={handleInput}
                            />
                        </div>

                        <div className="mt-5">
                            <button type="submit" className="bg-primary text-black py-3 px-6 rounded-md">Iniciar sesión</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login;