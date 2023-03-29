const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[],
			contacto:{}
		},
		actions: {
			addContactList : (data) =>{ 
				setStore({contactList : data})

			},

			
			 editContact : (contactoEditado) =>{
				const store = getStore()
				setStore({contacto: contactoEditado}) // no hace falta usar el SPREAD operator ya que solo vas a editar uno por tanto almacenas el del momento.
			 }
			}
		}
	};

export default getState;
