import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';
import {
    //auth pages
    Login,
    SignUp,
    // normal pages
    Home,
    About
} from '../pages';

function Routing() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/sign-up" component={SignUp}/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="*" render={() => (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )}/>
            </Switch>
        </Fragment>
    )
}

export default Routing;
