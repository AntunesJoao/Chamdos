import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="all">
     <Nav/>
      <form>
        <div className="title">
          <h2>CHAMADOS GLPI</h2>
        </div>
        <div className="forms">
          <div className="form-control">
          <label htmlFor="">Nome do Supervisor</label>
          <input type="text" name='text' id='name' required/>
          </div>

          <div className="form-control">
          <label htmlFor="">Loja</label>
          <input type="text" name='loja' id='loja' required/>
          </div>

          <div className="form-control">
          <label htmlFor="">Número do chamado</label>
          <input type='number' name='number' id='number' required />
          </div>

          <div className="form-control">
          <label htmlFor="">Carregar arquivos</label>
          <input type="file" accept='image' id='imagens' required />
          </div>
          <button type='submit'>Enviar</button>
        </div>

      </form>
      </div>
    </>
  )
}

export default App
