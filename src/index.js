import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {interceptor} from "./utils/intercepter";
import {Provider} from "react-redux";
//global add here
import './assets/scss/index.scss';
import * as serviceWorker from './serviceWorker';
import {store} from "./store";

//call axios interceptor
interceptor();

function Root() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
