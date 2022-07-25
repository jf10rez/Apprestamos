import { fetchWithoutToken, fetchWithToken } from "../../../helpers/fetch"
import { authCheckingFinish, authLogin } from "./authSlice"

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        try {
            
            const user = await fetchWithoutToken( 'auth', { email, password }, 'POST' )
            const { ok, uid, token, message = "" } = await user.json()

            if( !ok ){
                //TODO: Crear alerta para manejar el error
                return
            }

            localStorage.setItem('token', token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( authLogin( { uid, email } ) )


        } catch (error) {
            
        }

    }
}

export const startChecking = () => {
    return async(dispatch) => {
        try {

            const user = await fetchWithToken( 'auth/renew' )
            const { ok, token, uid, email } = await user.json()
            

            if( !ok ){
                //TODO: Agregar alerta para manejar el mensaje
                return dispatch( authCheckingFinish() )
            }

            localStorage.setItem('token', token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch( authLogin({uid, email}) )


        } catch (error) {
            console.log(error)
            // Swal.fire('Error', 'Ups! se ha producido un error')
            dispatch(authCheckingFinish())
        }
    }
}