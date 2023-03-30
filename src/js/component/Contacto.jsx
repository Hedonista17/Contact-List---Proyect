import React, {useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {Context} from "../store/appContext";
import {deleteContact} from "../services/index.js"



const Contacto = (props) => {

  const { store, actions } = useContext(Context)
 
  const navigate = useNavigate()


  const handleId = () => {
    actions.saveId(props.id); 
  };
  
  const handleEdit = () => {
   actions.editContact(props) //los props de abajo
    navigate('/formulario/editar-contacto')
  }
  const handleDelete = async  () => {
   await  deleteContact(store.id);
     actions.saveId("");
     location.reload()
  }
  


    return(
    <div className="container text-center my-2" id="Contacto">
    <div className="row">
      <div className="col-lg-3">
        <img id="imagenContacto" src="https://m.media-amazon.com/images/M/MV5BMTUxMzUyNjE4N15BMl5BanBnXkFtZTgwNjY4NTQ1MTI@._V1_.jpg"/>
      </div>
      <div className="col-lg-7">
        <p id ="nombre-contacto"><strong>{props.full_name}</strong></p>
        <div className="iconos my-1"> <i className="fa-solid fa-map-location-dot fa-lg my-2 mx-2"></i> {props.address}</div>
        <div className="iconos my-1"> <i className="fa-solid fa-mobile-screen fa-lg my-2 mx-2 "></i> {props.phone}</div>
        <div className="iconos my-1"><i className="fa-solid fa-at fa-lg my-2 mx-2 "></i> {props.email}</div>
      </div>
      <div className="col-lg-2 d-flex">
      <i className="fa-solid fa-user-pen fa-xl mt-3 mx-4" title="Editar Contacto" onClick={handleEdit}></i>
      <i className="fa-regular fa-trash-can  fa-xl mt-3 mx-4" title="Borrar Contacto" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick= {handleId}></i>
      
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"> <strong>Borrar Contacto</strong></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Estás seguro? El contacto se borrará <strong>para siempre</strong> !
                        </div>
                        <div className="modal-footer">
                            <button title="Cancelar" type="button" className="btn btn-dark" data-bs-dismiss="modal"> Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={handleDelete} >Borrar Contacto</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
   </div>);
};




export default Contacto;