import TarjetaGato from '../components/TarjetaGato'

function Home(){
    let tempGatos = [
        {id:1 , title: 'Gato 1', img:'https://fifeweb.org/app/uploads/2023/12/EXO-69___0009.jpg', alt:'Gato exotico 1'},
        {id:2 , title: 'Gato 2', img:'https://fifeweb.org/app/uploads/2023/12/EXO-69___0009.jpg', alt:'Gato exotico 2'},
        {id:3 , title: 'Gato 3', img:'https://fifeweb.org/app/uploads/2023/12/EXO-69___0009.jpg', alt:'Gato exotico 3'},
      ]

    return(
        <>
            {/* Banner de inicio */}
            <div className="flex justify-center mb-10">

                <div className="bg-primary w-4/5 p-6 flex items-center rounded-md">
                    <div className="w-2/3 h-full flex flex-col justify-evenly">
                        <p>Michi REST permite la búsqueda, creación, actualización y eliminación de razas de gatos experimentals por la Fédération Internationale Féline (FIF) además de razas experimentales.</p>
                        <p>Tambien, sin cargo extra, foto del gato de mi amigo: <span>Argo</span></p>
                    </div>

                    <div className="w-1/3 flex justify-center">
                        <img src="/img/argo.jpeg" alt="" className='h-60'/>
                    </div>
                </div>

            </div>

            {/* 3 gatos random */}
            <div className="flex flex-wrap justify-center mb-10">
                <div className="w-4/5 flex justify-evenly flex-wrap">
                    {   
                        tempGatos.map( gato=>(
                            <TarjetaGato title={gato.title} img={gato.img} alt={gato.alt} key={gato.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home;