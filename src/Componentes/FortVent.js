import telefono from '../imgs/svg/telefono.svg'
import viaje from '../imgs/svg/viaje.svg'
import call from '../imgs/svg/call.svg'
import entrega from '../imgs/entrega.jpg'
import mensajero from '../imgs/mensajero.jpg'
import intercambio from '../imgs/intercambio.jpg'
import logistica from '../imgs/logistica.jpg'
import embalar from '../imgs/embalar.jpg'
import contenedor from '../imgs/contenedor.jpg'
function FortVent() {
  return(
    <div id='container'>
      <div id='container-title'>Porque nos deberias elegir?</div>
      <div id='container-description'>NUESTRAS FORTALEZAS Y VENTAJAS</div>
      <div id='container1'>
        <div>
          <img src={entrega} alt='entrega' />
          <h5>Alrededor del Mundo</h5>
          <h3>Envio</h3>
          <p>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit. In ut sodales ante. Duis nec.</p>
        </div>
        <div>
          <img src={mensajero} alt='mensajero' />
          <h5>24 horas al dia</h5>
          <h3>Entrega de mensajeria</h3>
          <p>Donec scelerisque velit vel tempor laoreet. Etiam rhoncus placerat ex id porttitor. Quisque interdum purus vel ligula mattis egestas</p>
        </div>
        <div>
          <img src={intercambio} alt='intercambio' />
          <h5>Nuevo servicio</h5>
          <h3>Intercambio B2B</h3>
          <p>Pellentesque convallis semper venenatis. Proin vitae quam nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
        <div>
          <img src={logistica} alt='logistica' />
          <h5>7 dias a la semana</h5>
          <h3>Logistica</h3>
          <p>Ut vehicula, risus vitae aliquam posuere, erat libero molestie arcu, vel fermentum nulla erat vel augue. Entero pharetra dapibus arcu.</p>
        </div>
      </div>
      <div id='separador'>
        <img src='https://cargo.bold-themes.com/delivery-express/wp-content/uploads/sites/3/2015/09/truck-vignette-gray.png' alt='carrito' />
      </div>
      <div id='container2'>
        <div>
          <img src='https://www.ecommercenews.pe/wp-content/uploads/2020/08/delivery-vehiculos-ecommerce.jpg' alt='soporte' />
          <div>
            <img src={telefono} alt='soporte llamada' />
            <div>
              <h4>Soporte las 24 horas</h4>
              <p>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit. In ut sodales ante. Duis nec.

</p>
            </div>
          </div>
        </div>
        <div>
          <img src={embalar} alt='embalar' />
          <div>
            <img src={viaje} alt='viaje' />
            <div>
              <h4>Internacional</h4>
              <p>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit. In ut sodales ante. Duis nec.

</p>
            </div>
          </div>
        </div>
        <div>
          <img src={contenedor} alt='contenedor' />
          <div>
            <img src={call} alt='soporte llamada' />
            <div>
              <h4>Atencion al cliente</h4>
              <p>Duis hendrerit est nec eleifend euismod. Nulla tristique suscipit lacinia. Fusce vel vestibulum nulla, eget vehicula elit. In ut sodales ante. Duis nec.

</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FortVent;