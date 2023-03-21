
const URL = "https://assets.breatheco.de/apis/fake/contact/";
const HEADERS = {"Content-Type": "application/json"}
export const getData =async () => {
    

    try{ 
        const response = await fetch(`${URL}agenda/Agenda 2030`)
        const data = await response.json()
        return data

    } catch(error){ console.log("Error al traer informacion del servidor",error)}

}

export const createNewContact = async (contact) => {

    try{ 
        const response = await fetch(URL,
        {method:"POST",
        body: JSON.stringify(contact),
        headers:HEADERS,
        redirect:"follow" })
        const data = await response.json()
        return data

    } catch(error){ console.log("Error al enviar nuevo contacto",error)}
}