import React, {useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {Context} from "../store/appContext";
import {deleteContact} from "../services/index.js"



const Contacto = (props) => {

  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  
  const handleEdit = () => {
   actions.editContact(props) //los props de abajo
    navigate('/formulario/editar-contacto')
  }

  const handleDelete = async () => {
        await deleteContact(props.id);
        location.reload()
  }


    return(
    <div className="container text-center my-2" id="Contacto">
    <div className="row">
      <div className="col-lg-3">
        <img id="imagenContacto" src="https://m.media-amazon.com/images/M/MV5BMTUxMzUyNjE4N15BMl5BanBnXkFtZTgwNjY4NTQ1MTI@._V1_.jpg"/>
      </div>
      <div className="col-lg-7">
        <p><strong>{props.full_name}</strong></p>
        <div className="iconos"> <i className="fa-solid fa-map-location-dot fa-lg"></i> {props.address}</div>
        <div className="iconos"> <i className="fa-solid fa-mobile-screen fa-lg  "></i> {props.phone}</div>
        <div className="iconos"><i className="fa-solid fa-at fa-lg  "></i> {props.email}</div>
      </div>
      <div className="col-lg-2 d-flex">
      <i className="fa-solid fa-user-pen fa-xl mt-3 mx-4" onClick={handleEdit}></i>
      <i className="fa-regular fa-trash-can  fa-xl mt-3 mx-4" onClick={() => handleDelete(props.id)}></i>
      </div>
    </div>
  </div>);
};




export default Contacto;