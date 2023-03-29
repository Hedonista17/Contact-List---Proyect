import React, { useEffect, useContext, useState } from 'react';
import { deleteContact, getData } from '../services/index.js';
import Bienvenida from "../component/introduccion.jsx";
import Contacto from "../component/Contacto.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext.js';



const Home = () => {

	const { store, actions } = useContext(Context)



	const navigate = useNavigate

	const getInitialData = async () => {
		const data = await getData()
		actions.addContactList(data)
	}

	const handleEdit = () => {
		actions.editContact(contacto)
		navigate('/formulario/editar-contacto')
	}


	useEffect(() =>
	          getInitialData(), [])
	return (
		<>
			<div className="container mt-5">
				<Bienvenida />
				<Link to="/formulario/crear-contacto">
					<span id="botoncrear"> <button className="btn btn-dark"> Crear Contacto </button></span>
				</Link>
				<div className="container mt-5">
				
					{store.contactList.map((contacto, index) => {
						return (
							< Contacto key={index} nombre={contacto.full_name} direccion={contacto.address} telefono={contacto.phone} email={contacto.email}
								onClick={() => deleteContact(contacto)} clickEdit={() => handleEdit(contacto)} />
						)
					})}

				</div>
			</div>
		</>
	);
};

export default Home;
