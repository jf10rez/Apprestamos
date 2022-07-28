import Swal from "sweetalert2"
import { fetchWithToken } from "../../../helpers/fetch"
import { addPrestamo, loadPrestamos } from "./prestamoSlice"


export const newPrestamo = ( prestamo ) => {

    return async( dispatch ) => {

        try {

            const prestamoResponse = await fetchWithToken( "prestamo", prestamo, 'POST' )
            const body = await prestamoResponse.json()

            if( !body.ok ){
                return Swal.fire("Ups!", body.message, "warning")
            }

            Swal.fire("Éxito!", "Se creó el prestamo correctamente", "success")
            dispatch( addPrestamo( prestamo ) )
            
        } catch (error) {
            console.log(error)
        }

    }

}

export const startLoadPrestamos = () => {
    return async( dispatch ) =>{


        try {
            
            const response = await fetchWithToken( "prestamo" )
            const allPrestamos = await response.json()

            dispatch( loadPrestamos( allPrestamos.prestamos ) )

        } catch (error) {
            Swal.fire("Ups!", error, "error")
        }

    }
}