import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.GOOGLE_SIGN_IN_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case UserActionTypes.EMAIL_SIGN_IN_START:
        case UserActionTypes.SIGN_UP_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        default:
            // Don't change state if type is not concerned within this reducer (obvious default value)
            return state;
    }
}

export default userReducer