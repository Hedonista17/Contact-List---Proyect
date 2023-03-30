import React, { useEffect, useContext, useState } from 'react';
import { deleteContact, getData } from '../services/index.js';
import Bienvenida from "../component/introduccion.jsx";
import Contacto from "../component/Contacto.jsx";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext.js';



const Home = () => {

	const { store, actions } = useContext(Context) // traemos el contexto para acceder a las funciones etc
	const { loading, setLoad } = useState(false)


	useEffect(() => {             //funcion asincrona , espera a traer los datos del servidor
		const fetchData = async () => {
			const data = await getData();
			await actions.addContactList(data); // los datos que trae los pondrá en [] de contact list (ver flux.js lineas 4 y 9.)
			
		};
		fetchData();
	}, []);

	const handleDelete = async () => {     // funcion asincrona,primero para que "espere" para borrar el contacto 
		await deleteContact(store.id); // a continuacion borra la id almacenada en store 
		actions.saveId("");  // despues reseteas el saveID para que vuelva a ser un string vacio 
		location.reload()  // para recargar la pagina automaticamente 
	}

	//linea 36/38 --- nos lleva al type crear-contacto (useParams)
	//A continuacion en el home renderizo un mapeo del componente Contacto.jsx / se le pasa la info por props
	//El modal tiene que estar fuera del componente contacto, solo es un modal para todos, no hay que mapearlo siempre , no hace falta 
	//-- se pone una sola vez y con el data-bs-target se relacionan - este target se encuentra en el componente Contacto.jsx linea 40.
	// el index del mapeo linea 45 se pasa como key (identificador unico)
	// por los props del Contacto.jsx indicamos a que corresponde cada parte del objeto

	return (
		<>
			 <div className="container mt-5">
					<Bienvenida />
					<Link to="/formulario/crear-contacto">
						<span id="botoncrear">  <button className="btn btn-dark"> Crear Contacto </button></span>
					</Link>
					<div id="listado-contactos" className="container mt-5 ">

						{store.contactList.map((contacto, index) => {
							return (
								< Contacto key={index} full_name={contacto.full_name} address={contacto.address} phone={contacto.phone} email={contacto.email} id={contacto.id} />
							)
						})}

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
										<button type="button" className="btn btn-danger" onClick={handleDelete} > Borrar Contacto</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div> 
				
		</>
	);
};

export default Home;
