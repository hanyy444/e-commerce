const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            // Don't change state if type is not concerned within this reducer (obvious default value)
            return state;
    }
}

export default userReducer