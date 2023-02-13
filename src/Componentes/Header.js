import React from 'react';
import img from '../imgs/imagen1.jpg';

function Header() {
  return(
    <div id='header'>
      <div id='header1'>
        <div  id='logo'>
          <img src={img} alt='logo' />
        </div>
        <div id='vincRed'>          
          <div id='vinculos'>
            <a href='/'>Inicio</a>
            <a href='/'>Secciones</a>
            <a href='/'>Novedades</a>
            <a href='/'>Cotizacion</a>
          </div>
          <div id='redes'>            
            <i class="bi bi-search"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Header