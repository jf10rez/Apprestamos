import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ( e ) => {

        if( !e.target ){
            return setValues({
                ...values,
                startDate: e
            })
        }
        
        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        });

    }

    return [ values, handleInputChange, reset ];

}