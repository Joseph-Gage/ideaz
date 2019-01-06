const SIGN_IN_RESOURCE = 'http://localhost:3000/sign-in';

const UserService = {
    signIn: (email, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        return fetch(SIGN_IN_RESOURCE, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.token) {
                    return json.token;
                } else {
                    return '';
                }
            })
    }
};

export default UserService;
