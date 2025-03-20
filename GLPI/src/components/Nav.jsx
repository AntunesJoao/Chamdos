import React from 'react'
import './Nav.css'
import Png from "./img/png.png"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav'>

      <div className="logo">
        <img src={Png}  alt='Logo da empresa'/>
      </div>

      <Link to="/Chamados">
      <div className="btn">
        <button className='visu'>Visualizar</button>
      </div>
      </Link>
    </div>
  )
}

export default Nav
