import Swal from "sweetalert2"
import { fetchWithToken } from "../../../helpers/fetch"
import { addPrestamo, loadPrestamos, modifyPrestamo } from "./prestamoSlice"


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

export const startModifyPrestamo = ( prestamo ) => {

    return async(dispatch) => {

        try {
            const responsePin = await fetchWithToken( "auth/pin", { pin: prestamo.pin}, "POST" )
            const bodyPin = await responsePin.json()

            if( !bodyPin.ok ){
                return Swal.fire("Error", bodyPin.message, "error")
            }

            const responsePrestamo = await fetchWithToken( `prestamo/${ prestamo.id }`, prestamo, "PUT" )
            const bodyPrestamo = await responsePrestamo.json()

            if( !bodyPrestamo.ok ){
                return Swal.fire( "Ups!", bodyPrestamo.message, "info" )
            }

            Swal.fire("Éxito!", "Se modificó el prestamo correctamente", "success")

            dispatch( modifyPrestamo( bodyPrestamo.prestamo ) )

        } catch (error) {
            Swal.fire("Ups!", "Se presentó un error", "warning")
        }
    }

}