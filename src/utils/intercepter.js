import axios from "axios";

const baseUrl = "";

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
