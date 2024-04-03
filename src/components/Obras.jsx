import React from 'react'
import "../assets/css/obras.css"
import obra from "../assets/statics/Obrero1.webp"
import fabrica from "../assets/statics/fabrica.webp"
import cloaca from "../assets/statics/cloaca.webp"

export default function Obras() {
  return (
    <>
      <h1 className="obras" id="servicios">Servicios</h1>
      <div className="obras-container">
        <div className="card">
          <img src={obra} class="card-img-top" alt="foto de la obra"/>
            <div className="card-body">
              <h2 className="titulo-card">Instalación de gas industrial</h2>
              <p className="card-text">En cada proyecto de instalación de gas industrial, Gisa se compromete a brindar un servicio integral y personalizado. Comenzamos con un exhaustivo análisis de las necesidades de la industria, seguido de un diseño meticuloso y la selección de los mejores materiales y equipos. Nuestro enfoque centrado en la calidad y la seguridad garantiza resultados óptimos y duraderos para nuestros clientes. </p>
            </div>
        </div>
        <div className="card">
          <img src={cloaca} class="card-img-top" alt="foto de la obra"/>
            <div className="card-body">
            <h2 className="titulo-card">Instalación cloacal/pluvial</h2>
              <p className="card-text">La instalación de sistemas cloacales y pluviales es crucial para la infraestructura urbana y el bienestar comunitario. Nuestro equipo de profesionales calificados se encarga de cada detalle, desde la planificación y la logística hasta la ejecución y el control de calidad, asegurando la entrega oportuna de soluciones eficientes y duraderas para nuestras comunidades.</p>
            </div>
        </div>
        <div className="card">
          <img src={fabrica} class="card-img-top" alt="foto de la obra"/>
            <div className="card-body">
            <h2 className="titulo-card">Instalación de gas para lotes o barrios</h2>
              <p className="card-text">Ofrecemos soluciones completas en instalaciones de gas para loteos y barrios residenciales. Desde la evaluación inicial hasta la entrega final, nos comprometemos a brindar sistemas eficientes y seguros para cada hogar en la comunidad.</p>
            </div>
        </div>
      </div>
    </>
  )
}
