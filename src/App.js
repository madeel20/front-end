import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Auth, Root } from "./routing";
import {connect} from "react-redux";

class App extends React.Component {

    renderRoutingWithUserLoggedIn = (userLoggedIn) => {
        switch (userLoggedIn) {
            case true :
                return <Root/>;
            default :
                return <Auth/>
        }
    };

    render() {
        const {userLoggedIn} = this.props;
        return (
            <div className="app-root">
                <BrowserRouter>
                    {this.renderRoutingWithUserLoggedIn(userLoggedIn)}
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = ({}) => {
    return {
        userLoggedIn: true,
    }
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
