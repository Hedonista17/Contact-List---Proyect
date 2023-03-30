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

			 saveId: (id) => { //esta funcion guarda el id cuando le damos click a la papelera de borrar contacto, la recoge.
				setStore({id: id}) // el estado del store - id se modifica con el id que será props.id al utilizar la funcion 
		
			  }
			}
		}
	};

export default getState;
