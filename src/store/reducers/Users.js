import Users from '../constants/Users';

const initialState = {
    loading: false,
    updateLoading: false,
    loginLoading: false,
    user: {},
    checkAuthLoading: false,
    userLoggedIn: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case Users.CHECK_AUTH_API:
            return {...state, checkAuthLoading: action.loading, userLoggedIn: action.userLoggedIn};

        case Users.LOGIN_USER_API:
            return {...state, loginLoading: action.loading, userLoggedIn: action.userLoggedIn};

        case Users.LOGOUT_USER_API:
            return {...state, userLoggedIn: false, user: {}};

        case Users.SET_LOGGED_IN_USER:
            return {...state, user: action.user};

        case Users.UPDATE_LOGGED_IN_USER:
            return {...state, user: action.user};

        case Users.UPDATE_USER_API:
            return {...state, updateLoading: action.loading};

        default:
            return state;
    }
};
