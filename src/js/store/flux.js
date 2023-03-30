const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[],
			contacto:{},
			id: ""
		},
		actions: {
			addContactList : (data) =>{ 
				setStore({contactList : data})

			},

			
			 editContact : (contactoEditado) =>{
				const store = getStore()
				setStore({contacto: contactoEditado}) // no hace falta usar el SPREAD operator ya que solo vas a editar uno por tanto almacenas el del momento.
			 },

			 saveId: (id) => { //función que guarda el id del contacto que tengo seleccionado al intentar borrarlo
				setStore({id: id}) //seteamos el valor del store.id con el props.id del contacto que estoy intentando borrar
		
			  }
			}
		}
	};

export default getState;
