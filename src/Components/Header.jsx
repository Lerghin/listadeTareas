import React from 'react'
import perro from '../../public/image/perro.jpeg'
import './Header.css'
const Header = () => {
  return (
    <div className='inicio'>
    <h1>Peluquería de Mascotas: "Pulgas & Asociados" </h1>
    <img src={perro} alt="perro" />
    </div>
  )
}

export default Header