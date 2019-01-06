import AuthenticationConstants from '../Constants/AuthenticationConstants'

let token = sessionStorage.getItem('token');
const initialState = token ? { isSignedIn: true } : { isSignedIn: false };

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthenticationConstants.SIGN_IN_SUCCESS:
            return { isSignedIn: true };
        case AuthenticationConstants.SIGN_OUT:
            return { isSignedIn: false };
        default:
            return state;
    }
};

export default authenticationReducer;
