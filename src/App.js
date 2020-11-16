import Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import User from './components/User'
import Foco from './components/Foco'

function App() {
  return (
    <div>
    <h1>Focos</h1>
    <Foco lugar = "Sala"></Foco>
    <Foco lugar = "Cocina"></Foco>
    <Foco lugar = "Recamara principal"></Foco>
    <Foco lugar = "Recamara de los niños"></Foco>
    <Foco lugar = "Comedor"></Foco>
    <Foco lugar = "Estancia"></Foco>
    <hr></hr>
    <h1>Parrafo</h1>
    <Parrafo></Parrafo>
    <hr></hr>
    <h1>Contador</h1>
    <Contador></Contador>
    <hr></hr>
    <h1>Usuarios</h1>
    <User></User>
     
    </div>
  );
}

export default App;