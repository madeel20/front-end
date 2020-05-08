import axios from "axios";
import {API_URL} from "./environments";
import {logout} from "../store/actions/Users";

let baseUrl = API_URL[0];

const interceptor = () => {

    axios.defaults.baseURL = baseUrl;

    getTokenAndSetIntoHeaders();

    axios.interceptors.request.use(
        function (config) {
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            console.log('response', response)
            if(response && response.data && response.data.statusCode === 401){
                logout()
            }
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

};

//token key name into localStorage
export const ACCESS_TOKEN = 'ACCESS_TOKEN';

// get token into local storage and set into headers function
export const getTokenAndSetIntoHeaders = async (token) => {
    if(token){
        axios.defaults.headers.common['authorization'] = `${token}`;
    } else {
        let accessToken = await localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            axios.defaults.headers.common['authorization'] = `${accessToken}`;
        }
    }
};

//set token into local storage
export const setTokenInToLocalStorage = async (value) => {
    try {
        await localStorage.setItem(ACCESS_TOKEN, value);
    } catch (error) {
        // alertError(JSON.stringify(error))
    }
};

//set token into local storage
export const removeTokenInToLocalStorageAndDeleteAuthorization = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    delete axios.defaults.headers.common['authorization'];
};

export {
    baseUrl,
    interceptor
}
