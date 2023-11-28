import React from 'react'
import { LuDog } from "react-icons/lu";
import services from './../assets/servicios/servicios.js'
import './../Components/TarjetaServicio.css'
import { FaDollarSign } from "react-icons/fa";


const TarjetaServicio = () => {
  return (
    <div className="services-container">
      <h1>Servicios para Mascotas <LuDog/></h1>
      <div className="cards-container">
        {services.map(service => (
          <div key={service.id} className="card">
            <img src={service.image} alt={service.name} className="card-image" />
            <div className="card-details">
              <h2>{service.name} </h2>
              <p>{service.description}</p>
              <p>Precio: {service.price} <FaDollarSign /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default TarjetaServicio