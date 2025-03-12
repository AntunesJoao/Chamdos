import React from 'react'
import './Nav.css'
import Png from "./img/png.png"

const Nav = () => {
  return (
    <div className='nav'>

      <div className="logo">
        <img src={Png}  alt='Logo da empresa'/>
      </div>

      <div className="btn">
        <button className='visu'>Visualizar</button>
      </div>
    </div>
  )
}

export default Nav
