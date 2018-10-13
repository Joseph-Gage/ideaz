import { UPDATE_SIGNED_IN } from '../Constants/action-types';

const initialState = {
    isSignedIn: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SIGNED_IN:
            return {
                ...state,
                isSignedIn: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
