import React from 'react'
import '../Styles/EstilosFooter.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Acerca de Nosotros</h3>
            <p>Somos una empresa dedicada a brindar soluciones tecnológicas innovadoras.</p>
          </div>
          <div className="col-md-4">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/sitiosturisticos">Sítios Turisticos</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contáctanos</h3>
            <p>Teléfono: +1 (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
