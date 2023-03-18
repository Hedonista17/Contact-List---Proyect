

export const getData =async () => {
    
 const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/Agenda 2030";

    try{ 
        const response = await fetch(URL)
        const data = await response.json()
        return data

    } catch(error){ console.log("Error al traer informacion del servidor",error)}

}
