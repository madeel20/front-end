import Users from "../constants/Users";
import { get } from '../../utils/methods';
import {
    getTokenAndSetIntoHeaders,
    removeTokenInToLocalStorageAndDeleteAuthorization,
    setTokenInToLocalStorage,
    ACCESS_TOKEN
} from "../../utils/intercepter";

export const checkAuth = (CB) => async (dispatch) => {
    dispatch({type: Users.CHECK_AUTH_API, loading: true, userLoggedIn: false});
    let accessToken = await localStorage.getItem(ACCESS_TOKEN);
    if(accessToken) {
        getTokenAndSetIntoHeaders(accessToken);
        get('admins/checkAuth')
            .then(({data}) => {
                if (!data.error) {
                    let user = data.user ? data.user : {};
                    dispatch(loggedInUserUpdate(user));
                    dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: true});
                    CB && CB()
                } else {
                    removeTokenInToLocalStorageAndDeleteAuthorization();
                    // alertError(data.data[0]);
                    dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
                }
            })
            .catch((error) => {
                dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
                console.log('error', error)
            });
    } else {
        dispatch({type: Users.CHECK_AUTH_API, loading: false, userLoggedIn: false});
    }
};

export const loggedInUserUpdate = (user) => (dispatch) => {
    dispatch({type: Users.SET_LOGGED_IN_USER, user: user});
};

export const logout = (history) => (dispatch) =>  {
    dispatch({type: Users.LOGOUT_USER_API});
    removeTokenInToLocalStorageAndDeleteAuthorization();
    // alertSuccess('Successfully logout');
    history.push('/');
};
