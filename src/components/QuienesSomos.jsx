import React from 'react'
import "../assets/css/quienes_somos.css"
import Video from '../assets/statics/dummy Video.mp4'

export default function QuienesSomos() {
  return (
    <>
      <section >
        <div className="container">
            <div className="video">
                <video controls src={Video}/>
            </div>
            <h1 id="somos-container">Quienes somos</h1>
            <p>
              En Gisa Constructora, nos destacamos como líderes en la conexión de redes de gas y agua, ofreciendo servicios especializados para barrios residenciales, loteos e industrias. Con un enfoque en la excelencia y la seguridad, nuestro equipo altamente capacitado proporciona soluciones personalizadas que cumplen con los más altos estándares de calidad. Desde proyectos residenciales hasta necesidades industriales complejas, nos comprometemos a brindar una conectividad confiable y eficiente que impulse el desarrollo y la prosperidad en cada comunidad y empresa que servimos.
            </p>
        </div>
      </section>
    </>
  )
} 
