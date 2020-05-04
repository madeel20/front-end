import axios from "axios";
import {API_URL} from "./environments";

let baseUrl = API_URL;

const interceptor = () => {

    axios.defaults.baseURL = baseUrl;

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
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    )

};

export {
    baseUrl,
    interceptor
}
