import './App.css';
import Header from './Componentes/Header'
import Carrusel from './Componentes/Carrusel'
import FortVent from './Componentes/FortVent'
import elemento1 from './imgs/elemento1.jpg'
import elemento2 from './imgs/elemento2.jpg'
import elemento3 from './imgs/elemento3.jpg'
import FormCalulator from './Componentes/FormCalculator';

const elementos = [elemento1, elemento2, elemento3]

function Web() {
  return (
    <div className="web">
      <Header />
      <Carrusel elemento={elementos} />
      <FortVent />
      <FormCalulator />
      <footer>
        <div id='copyright'>Copyright by Cargo International Inc. All rights reserved</div>
        <div id='final'>
          <a href='/'>Inicio</a>
          <a href='/'>Contacto</a>
        </div>
      </footer>
    </div>
  );
}

export default Web;
