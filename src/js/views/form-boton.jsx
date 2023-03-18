import React from 'react';





const Crear = () => {
    return (
        <>
         <div className="container">
            <form className="mt-5" >

                <h1>Añadir un nuevo contacto</h1>

                <div className="p-2 mb-3">
                    <label className="formulario"> Nombre  </label>
                    <input name="full_name" type="text" className="form-control" placeholder="Introduzca su nombre completo" required />
                </div><div className="p-2 mb-3">
                    <label className="formulario"> Email</label>
                    <input name="email" type="email" className="form-control" placeholder="estoesunejemplo@gmail.com" />
                </div><div className="p-2 mb-3">
                    <label className="formulario">Numero de teléfono</label>
                    <input name="phone" type="tel" className="form-control" placeholder="Introduzca su numero de contacto" required />
                </div><div className="p-2 mb-3">
                    <label className="formulario">Dirección</label>
                    <input name="address" type="text" className="form-control" placeholder="Añadir dirección" />
                </div>


                <button className="btn btn-dark mx-3">  Guardar Contacto</button>



            </form>
            </div>
        </>
    );
};



export default Crear;