import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom';
import {
    Dashboard
} from '../pages';

function Auth() {
    return (
        <Fragment>
            <Switch>
                <Route path="*" render={() => (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )}/>
            </Switch>
        </Fragment>
    )
}
function Root() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="*" render={() => (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )}/>
            </Switch>
        </Fragment>
    )
}

export {
    Auth,
    Root
};
