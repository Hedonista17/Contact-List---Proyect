import React, { useState,useContext,useEffect} from 'react';
import { createNewContact,editContact } from '../services';
import { useNavigate,useParams } from 'react-router';
import { Link} from 'react-router-dom';
import { Context } from '../store/appContext';

const initialState = {               //estado inicial del useState linea 18-- será un objeto vacio que pasaremos a la api 
    full_name: "",
    email: "",
    agenda_slug: "Agenda 2030", //agenda estática creada 
    address: "",
    phone: "",
}


const Crear = () => {

    const [contact, setContact] = useState(initialState)
    const {store,actions} =useContext(Context) 
    const navigate = useNavigate() 
    const {type} = useParams() // el :type del layout


    useEffect(() => {
        async function updateContact() {
          if(type === 'editar-contacto') {        // si el type es editar contacto se sete el estado diferente -el del store
            setContact(store.contacto);
            //console.log("en el use effect del formulario",store.contacto);
          }
        }
        updateContact();
      }, []);

   

    const handleChange = (event) => { //spread operator siempre al setear el estado nuevo objetos o arrays
       setContact({...contact,[event.target.name]: event.target.value}) //linea 18- le pasamos target.name que viene del name de los inputs y target.value es lo que recogemos del input en defaulValue
       //console.log(event.target.value)
      
    }// los name de los inputs tienen que coincidir con el initial state.

    const handleSubmit = async (event) => {
        event.preventDefault();
        type === 'editar-contacto' ? await editContact(contact) : await createNewContact(contact); //funciones de services/index.js
        navigate('/') // despues con el useNavigate le decimos en la funcion que al guardar el contacto te lleve a la pagina inicial
        //al enviar el formulario  si editar-contacto es true que haga en la API el metodo PUT si no será el POST
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
                            <input   defaultValue={contact.full_name} name="full_name" type="text" className="form-control" placeholder="Introduzca su nombre completo" pattern="^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]*$"
                              maxlength="40" required  />
                        </div><div className="p-2 mb-3">
                            <label className="formulario"> Email</label>
                            <input   defaultValue={contact.email} name="email" type="email" className="form-control" placeholder="estoesunejemplo@gmail.com" />
                        </div><div className="p-2 mb-3">
                            <label className="formulario">Numero de teléfono</label>
                            <input  defaultValue={contact.phone}  name="phone" type="tel" className="form-control" placeholder="Introduzca su numero de contacto" maxlength="9"  pattern="[0-9]{9}"  required />
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