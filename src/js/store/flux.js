const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[]
		},
		actions: {
			addContactList : (data) =>{ 
				setStore({contactList : data})

			}
			}
		}
	};

export default getState;
