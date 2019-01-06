import AuthenticationConstants from '../Constants/AuthenticationConstants'
import UserService from '../Services/userService'

const authenticationActions = {
    signIn: (email, password, history) => {
        return dispatch => {
            UserService.signIn(email, password)
                .then(token => {
                    sessionStorage.setItem('token', token);
                    history.push('/');

                    if (token) {
                        dispatch({ type: AuthenticationConstants.SIGN_IN_SUCCESS });
                    } else {
                        dispatch({ type: AuthenticationConstants.SIGN_IN_FAILURE });
                    }
                })
        }
    },

    signOut: () => {
        sessionStorage.removeItem('token');
        return { type: AuthenticationConstants.SIGN_OUT }
    }
};

export default authenticationActions;
