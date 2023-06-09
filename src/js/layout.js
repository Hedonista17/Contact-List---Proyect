import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./views/home.jsx";
import Crear from "./views/form-boton.jsx";
import injectContext from "./store/appContext";
import  Navbar  from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
			      <Navbar/>
					<Routes>
						<Route path="/" element={< Home />} />
						<Route path="/formulario/:type" element={< Crear/>} /> 
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
// con el  :type hacemos que vaya o a editar contacto o a crear un contacto nuevo, se pasa por parámetros (useParams)