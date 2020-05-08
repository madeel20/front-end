import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Auth, Root } from "./routing";
import {connect} from "react-redux";
import {checkAuth} from "./store/actions/Users";
import {Loading} from "./uiComponents";

class App extends React.Component {

    renderRoutingWithUserLoggedIn = (userLoggedIn) => {
        switch (userLoggedIn) {
            case true :
                return <Root/>;
            default :
                return <Auth/>
        }
    };

    checkTokenInParamAndSet = () => {
        let obj = {};
        let search = (window.location && window.location.search) ? window.location.search.substring(1) : '';
        if (search) {
            obj = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) })
        }
        if (obj.token) {
            window.location.href =  window.location.href.split("?")[0];
            this.props.checkAuth(obj.token)
        } else {
            this.props.checkAuth()
        }
    }

    componentDidMount() {
        this.checkTokenInParamAndSet()
    }

    render() {
        const {userLoggedIn, loading} = this.props;
        return (
            <div className="app-root">
                <BrowserRouter>
                    {loading ? <Loading/> : null}
                    {this.renderRoutingWithUserLoggedIn(userLoggedIn)}
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => {
    return {
        userLoggedIn: true,
        loading: users.user.loading
    }
};
const mapDispatchToProps = {
    checkAuth
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
