import React, { useEffect, useContext, useState } from 'react';
import { deleteContact, getData } from '../services/index.js';
import Bienvenida from "../component/introduccion.jsx";
import Contacto from "../component/Contacto.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext.js';



const Home = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchData = async () => {
		  const data = await getData();
		  actions.addContactList(data);
		};
	
		fetchData();
	  }, []);


	return (
		<>
			<div className="container mt-5">
				<Bienvenida />
				<Link to="/formulario/crear-contacto">
					<span id="botoncrear">  <button className="btn btn-dark"> Crear Contacto </button></span>
				</Link>
				<div className="container  mt-5">
				
					 {store.contactList.map((contacto, index) => {
						return (
							< Contacto key={index} full_name={contacto.full_name} address={contacto.address} phone={contacto.phone} email={contacto.email} id= {contacto.id} />
						)
					})}
					 
					

				</div>
			</div>
		</>
	);
};

export default Home;
