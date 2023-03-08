import React from 'react'
import {Link} from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h1>Cadastro de pizza</h1>
      <div>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/cadastro">Cadastro</Link></p>
      </div>
    </div>
  )
}

export default Menu
