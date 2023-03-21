import React, { useState} from 'react';
import { createNewContact } from '../services';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const initialState = {
    full_name: "",
    email: "",
    agenda_slug: "Agenda 2030",
    address: "",
    phone: "",
}

const Crear = () => {

    const [contact, setContact] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = (event) => { //spread operator siempre al setear el estado nuevo objetos o arrays
       setContact({...contact,[event.target.name]: event.target.value})
       console.log(event.target.value)
      
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       await  createNewContact(contact)
        navigate('/')
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}  onChange={handleChange}  className="mt-5" >
                      <div className="d-flex">
                      <h1>Añadir un nuevo contacto</h1> 
                    <Link to="/"> <span title="Volver al Inicio"><i className="fa-solid fa-xmark fa-2xl mx-5 mt-4" ></i></span></Link>
                    
                      </div>
                   

                
                     
                                    
                        <div className="p-2 mb-3">
                            <label className="formulario"> Nombre  </label>
                            <input   defaultValue={contact.full_name} name="full_name" type="text" className="form-control" placeholder="Introduzca su nombre completo" required />
                        </div><div className="p-2 mb-3">
                            <label className="formulario"> Email</label>
                            <input   defaultValue={contact.email} name="email" type="email" className="form-control" placeholder="estoesunejemplo@gmail.com" />
                        </div><div className="p-2 mb-3">
                            <label className="formulario">Numero de teléfono</label>
                            <input  defaultValue={contact.phone}  name="phone" type="tel" className="form-control" placeholder="Introduzca su numero de contacto" required />
                        </div><div className="p-2 mb-3">
                            <label className="formulario">Dirección</label>
                            <input   defaultValue={contact.address} name="address" type="text" className="form-control" placeholder="Añadir dirección" />
                        </div>
                 

                    <button type="submit" className="btn btn-dark mx-3">  Guardar Contacto</button>
                
                     


                </form>
            </div>
        </>
    );
};



export default Crear;