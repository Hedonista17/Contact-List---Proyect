import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import { deleteContact } from "../services/index.js"



const Contacto = (props) => {

  const { store, actions } = useContext(Context)

  const navigate = useNavigate()


  const handleId = () => {      // esta funcion recoge el id al hacer click en el icono papelera 
    actions.saveId(props.id); //se llama a la funcion del flux.js aqui para poder utilizarla.
  };

  const handleEdit = () => {           //se llama a la funcuon del flux.js edit contact 
    actions.editContact(props) //los props de abajo son lo que pasamos como parametro para setearlos en el setStore del flux.js
    navigate('/formulario/editar-contacto')  //:type del layout editar-contacto
  }



  return (
    <div className="container text-center my-2" id="Contacto">
      <div className="row">
        <div className="col-lg-3">
          <img id="imagenContacto" src="https://m.media-amazon.com/images/M/MV5BMTUxMzUyNjE4N15BMl5BanBnXkFtZTgwNjY4NTQ1MTI@._V1_.jpg" />
        </div>
        <div className="col-lg-7">
          <p id="nombre-contacto"><strong>{props.full_name}</strong></p>
          <div className="iconos my-1"> <i className="fa-solid fa-map-location-dot fa-lg my-2 mx-2"></i> {props.address}</div>
          <div className="iconos my-1"> <i className="fa-solid fa-mobile-screen fa-lg my-2 mx-2 "></i> {props.phone}</div>
          <div className="iconos my-1"><i className="fa-solid fa-at fa-lg my-2 mx-2 "></i> {props.email}</div>
        </div>
        <div className="col-lg-2 d-flex">
          <i className="fa-solid fa-user-pen fa-xl mt-3 mx-4" title="Editar Contacto" onClick={handleEdit}></i>
          <i className="fa-regular fa-trash-can  fa-xl mt-3 mx-4" title="Borrar Contacto" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleId}></i>

        </div>

      </div>
    </div>);
};




export default Contacto;