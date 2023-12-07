const initialState = {
    options: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ANSWERS':
            return { //guarda la info de option en mi estado options y me la retorna
                ...state,
                options: action.payload
            }

        default:
            return state;
    }
}

export default rootReducer;