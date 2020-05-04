import io from "socket.io-client";
import { baseUrl } from "./intercepter";
import { getUserUid } from "../utils/helper";

let socket = null;

const setGlobalSocketConnection = (data) => {
    socket = data;
};
const connectionSocket = (uid = '') => {
    let options = { 'transports': ['websocket', 'polling'] };
    if(uid) {
        socket = io(`${baseUrl}/?id=${uid}`, options);
    } else {
        getUserUid()
            .then(id => socket = io(`${baseUrl}`, options))
            .catch(error => console.log('error', error));
    }
};

export { connectionSocket, socket, setGlobalSocketConnection }

