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
				setStore({...store, contacto: contactoEditado})
			 }
			}
		}
	};

export default getState;
