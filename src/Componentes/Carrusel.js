import React from 'react';

function Carrusel( { elemento } ) {

  return(
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        {elemento.map((x,i)=><button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${i}`} aria-label={`Slide ${i+1}`} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined}></button> )}
      </div>
      <div class="carousel-inner">
        <div class="carousel-inner">
        {elemento.map((x,i)=><div key={i} class={i===0?"carousel-item active":"carousel-item"}>
          <img class="d-block w-100" src={x} alt={`${i} Slide`} />
        </div>)}      
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrusel;