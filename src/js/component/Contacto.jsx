import React from "react";



const Contacto = (props) => {

    return(
    <div className="container text-center" id="Contacto">
    <div className="row">
      <div className="col-lg-3">
        <img id="imagenContacto" src="https://m.media-amazon.com/images/M/MV5BMTUxMzUyNjE4N15BMl5BanBnXkFtZTgwNjY4NTQ1MTI@._V1_.jpg"/>
      </div>
      <div className="col-lg-7">
        <p><strong>{props.nombre}</strong></p>
        <p> <i class="fa-solid fa-map-location-dot fa-lg mx-3"></i> {props.direccion}</p>
        <p> <i class="fa-solid fa-mobile-screen fa-lg mx-3"></i> {props.telefono}</p>
        <p><i class="fa-solid fa-at fa-lg mx-3"></i> {props.email}</p>
      </div>
      <div className="col-lg-2 d-flex">
      <i class="fa-solid fa-user-pen fa-xl mt-3 mx-4" onClick={props.clickEdit}></i>
      <i class="fa-regular fa-trash-can  fa-xl mt-3 mx-4" onClick={props.onClick}></i>
      </div>
    </div>
  </div>);
};




export default Contacto;