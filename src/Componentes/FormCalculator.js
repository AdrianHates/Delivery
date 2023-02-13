import React from 'react'
import carro from '../imgs/mercedes.png'

function FormCalulator() {
  
  return(
    <div id='calculador'>
      <div id='calculador1'>
      <h6>¿No estás seguro de cuánto te costaría?</h6>
      <h1>¡USA NUESTRA CALCULADORA PARA AVERIGUARLO!
      </h1>
      
    <form action="/my-handling-form-page" method="post">
      <div>
        <label for="altura">Altura (cm):</label>
        <input type="number" id="altura" name="altura" />
      </div>
      <div>
        <label for="ancho">Ancho (cm):</label>
        <input type="number" id="ancho" name="ancho" />
      </div>
      <div>
        <label for="profundidad">Profundidad (cm):</label>
        <input type="number" id="profundidad" name="profundidad" />
      </div>
      <div>
        <label for="peso">Peso (kg):</label>
        <input type="number" id="peso" name="peso" />
      </div>
      <div>
        <label for="distancia">Distancia (km) </label>
        <input tabindex='-1' id='distancia' type='range' min='0' max='100' />
      </div>
      <div>
        <label for="servicio">Tipo de servicio </label>
        <select id="servicio" name="tipo_servicio"></select>
      </div>
      <div id="seguro">
      <p>Anadir Seguro</p>
      <div class="form-check form-switch">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />        
      </div>
      </div>
      <div id='total'><div>TOTAL</div><div>$0.00</div></div>
    </form>
    </div>
    <div id='calculador2'>
      <img src={carro} alt='carro' />
      <i class="bi bi-question-lg"></i>
      <p>¿Todavía no estás seguro de cuánto te costaría?</p>
      <p>¡Abre la lista completa de<br />calculadoras extendidas!</p>
      <a href='/'>TODAS LAS CALCULADORAS</a>
    </div>
    </div>
  )
}

export default FormCalulator;