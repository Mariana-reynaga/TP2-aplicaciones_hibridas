import './App.css'

function App() {

  return (
    <>
      {/* Navbar */}
      <div className="bg-green-200  py-6 px-4 mb-10 flex justify-between">
        <div className="mx-5 flex justify-between w-full">
          <h1 className='text-2xl font-bold'>Michi rest</h1>
        
          <ul className='flex justify-between items-end w-1/3'>
            <li>Reconocidos</li>
            <li>Experimentales</li>
            <li>Users</li>
          </ul>
        </div>

      </div>

      {/* Banner de inicio */}
      <div className="flex justify-center">

        <div className="bg-red-300 w-4/5 p-6 flex items-center">
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
      <div className="flex flex-wrap">
        
      </div>
    </>
  )
}

export default App
