import {useState}  from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
    pacientes={pacientes}
    setPacientes={setPacientes}
    />
    <ListadoPaciente/>
    </div>
    </div>
  )
}

export default App
