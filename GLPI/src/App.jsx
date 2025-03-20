import { use, useState } from 'react'
import './App.css'
import Nav from './components/Nav'


function App() {
  
  const [nome, setNome] = useState()
  const [loja, setLoja] = useState()
  const [numero, setNumero] = useState()
  const [img, setImg] = useState()

  
  const handNome = (e) => {
      setNome(e.target.value)
  }
  const handLoja = (e) => {
      setLoja(e.target.value)
  }
  const handNumero = (e) => {
      setNumero(e.target.value)
  }
  const handNimg = (e) => {
      setImg(e.target.value)
  }

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
          <input type="text" name='text' id='name' onChange={handNome} required/>
          
          </div>

          <div className="form-control">
          <label htmlFor="">Loja</label>
          <input type="text" name='loja' id='loja' onChange={handLoja} required/>
         
          </div>

          <div className="form-control">
          <label htmlFor="">Número do chamado</label>
          <input type='number' name='number'  id='number' onChange={handNumero} required />
          
          </div>

          <div className="form-control">
          <label htmlFor="">Carregar arquivos</label>
          <input type="file" accept='image' id='imagens' onChange={handNimg} required />
          
          </div>
          <button type='submit'>Enviar</button>
        </div>

      </form>
      </div>
    </>
  )
}

export default App
