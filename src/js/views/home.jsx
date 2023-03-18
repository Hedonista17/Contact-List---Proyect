import React, { useEffect, useContext } from 'react';
import { getData } from '../services/index.js';
import Bienvenida from "../component/introduccion.jsx";
import Contacto from "../component/Contacto.jsx";
import { Link } from 'react-router-dom';
 import { Context } from '../store/appContext.js';



const Home = () => {
  
	const {store,actions} = useContext(Context)


   const getInitialData = async () =>{
     const data = await getData()
	  actions.addContactList(data)
   }
  

   useEffect( () => getInitialData (),[])
	return (
		<>
		<div className="container mt-5">
		<Bienvenida/>
		<Link to= "/crear-contacto">
            <button className="btn btn-dark"> Crear Contacto </button>
        </Link>
		<div className="container mt-5">
            { store.contactList.map( (contacto) => {
				return (

               < Contacto nombre ={contacto.full_name}  direccion={contacto.address} telefono={contacto.phone} email={contacto.email} /> 

				)
			})}


		
		</div>
		</div>
		</>
	);
};

export default Home;
