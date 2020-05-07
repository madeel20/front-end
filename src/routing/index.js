import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import {
    Dashboard,
    Schedule,
    Quizzes,
    Questions,
    MySubjects,
    MyStudents,
    MyProfile,
    MyMeetings,
    MyFinances,
    Messages,
    LessonPlan,
    Homeworks,
    Documents
} from '../pages';
import {SideMenu} from "../uiComponents";

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

const routes = [
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard
    },
    {
        path: '/my-students',
        component: MyStudents
    },
    {
        path: '/my-subjects',
        component: MySubjects
    },
    {
        path: '/my-meetings',
        component: MyMeetings
    },
    {
        path: '/schedule',
        component: Schedule
    },
    {
        path: '/my-finances',
        component: MyFinances
    },
    {
        path: '/questions',
        component: Questions
    },
    {
        path: '/quizzes',
        component: Quizzes
    },
    {
        path: '/homeworks',
        component: Homeworks
    },
    {
        path: '/documents',
        component: Documents
    },
    {
        path: '/messages',
        component: Messages
    },
    {
        path: '/lesson-plan',
        component: LessonPlan
    },
    {
        path: '/my-profile',
        component: MyProfile
    },
];

function Root() {
    return (
        <Fragment>
           <div className="body-with-side-menu d-flex flex-row h-100">
              <div className="side-menu-container">
                  <SideMenu/>
              </div>
               <div className="body-container">
                   <Switch>
                       {routes.map((route, index) => <Route key={index} exact={route.exact} path={route.path} render={route.component}/>)}
                       <Redirect from="/" to="/dashboard"/>
                       <Route path="*" render={() => (
                           <div>
                               <h1>Not Found</h1>
                           </div>
                       )}/>
                   </Switch>
               </div>
           </div>
        </Fragment>
    )
}

export {
    Auth,
    Root
};
