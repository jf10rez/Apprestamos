import Swal from "sweetalert2"
import { fetchWithToken } from "../../../helpers/fetch"
import { loadUnits, newUnits } from "./unitSlice"

export const startNewUnit = ( unit ) => {

    return async( dispatch ) => {

        try {

            const newUnit = await fetchWithToken("unit", unit, "POST")
            const responseUnit = await newUnit.json()

            if( !responseUnit.ok ){
                return Swal.fire("Ups!", responseUnit.message, "warning")
            }

            Swal.fire("Éxito", "Se registraron las unidades correctamente", "success")
            dispatch( newUnits( responseUnit.units ) )
            
        } catch (error) {
            Swal.fire("Ups!", error, "error")
        }

    }

}

export const getUnit = () => {

    return async( dispatch ) => {

        try {

            const newUnit = await fetchWithToken("unit")
            const responseUnit = await newUnit.json()

            if( !responseUnit.ok ){
                return Swal.fire("Ups!", responseUnit.message, "warning")
            }
            dispatch( loadUnits( responseUnit.units ) )
            
        } catch (error) {
            Swal.fire("Ups!", error, "error")
        }

    }

}