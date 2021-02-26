const initializeState = {
    id              : '',
    rol             : '',
    last_name       : '',
    first_name      : '',
    cohorte         : '',
    email           : '',
    dni             : '',
    grupo           : '',
    photo           : '',
    github          : '',
    nacionalidad    : '',
    telefono        : '',
}
export default function(state = initializeState, action){
    console.log(action.payload)
    switch(action.type){
        case 'login': 
                return{ 
                id           : action.payload.id,
                rol          : action.payload.rol,
                last_name    : action.payload.last_name,
                first_name   : action.payload.first_name,
                cohorte      : action.payload.cohorte,
                email        : action.payload.email,
                dni          : action.payload.dni,
                grupo        : action.payload.grupo ? action.payload.grupo  : '',
                photo        : action.payload.photo,
                github       : action.payload.github,
                nacionalidad : action.payload.nacionalidad,
                phone        : action.payload.phone,
            }
        case 'logout': 
                return initializeState;
        default: 
            return state;
    }
}   