export const addMount = ( date ) => {
    if( !date ) return new Error("Ingrese una fecha")

    return date.setMonth(date.getMonth() + 1)
}