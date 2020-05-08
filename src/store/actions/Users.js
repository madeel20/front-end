import Users from "../constants/Users";
import { post } from '../../utils/methods';
import {
    getTokenAndSetIntoHeaders,
    removeTokenInToLocalStorageAndDeleteAuthorization,
    setTokenInToLocalStorage,
    ACCESS_TOKEN
} from "../../utils/intercepter";
import {toast} from "../../utils/helper";

export const checkAuth = (token, CB) => async (dispatch) => {
    dispatch({type: Users.CHECK_AUTH_API, loading: true, userLoggedIn: false});
    if(token) setTokenInToLocalStorage(token)
    let accessToken = await localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        getTokenAndSetIntoHeaders(accessToken);
        post('teacher/getProfile')
            .then(({data}) => {
                if (!data.error) {
                    dispatch(loggedInUserUpdate(data));
                    dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: true});
                    CB && CB()
                } else {
                    toast('error', data.message);
                    console.log('data', data)
                    dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
                }
            })
            .catch((error) => {
                dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
                console.log('error', error)
            });
    } else {
        console.log('run else')
        dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
        logout();
    }
};

export const loggedInUserUpdate = (user) => (dispatch) => {
    dispatch({type: Users.SET_LOGGED_IN_USER, user: user});
};

export const logout = () =>  {
    // dispatch({type: Users.LOGOUT_USER_API});
    removeTokenInToLocalStorageAndDeleteAuthorization();
    window.location = 'http://localhost:3001/login';
    // alertSuccess('Successfully logout');
};
