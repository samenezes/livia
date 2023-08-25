import { useState } from 'react'
import './App.css'
import Principal from './principal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Principal/>

      {/* <div>

        <p className="nome">Lívia Soares Mansur</p>
        <p className="frase">Bom descanso e bom final de semana!</p>

      </div> */}

    </>
  )
}

export default App
