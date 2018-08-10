import { UPDATE_LOGGED_IN } from "../Constants/action-types";

const initialState = {
    isLoggedIn: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;