import React from 'react';
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Dropdown, Menu} from "antd";
import {useSelector} from "react-redux";
import {logout} from "../../store/actions/Users";

const routes = [
    {
        title: 'Dashboard',
        // icon: 'icon-dashboard'
        icon: 'icon-document',
        path: '/',
    },
    {
        title: 'My Students',
        icon: 'icon-user',
        path: 'my-students',
    },
    {
        title: 'My Subjects',
        icon: 'icon-book',
        path: 'my-subjects',
    },
    {
        title: 'My Meetings',
        icon: 'icon-alaram',
        path: 'my-meetings',
    },
    {
        title: 'Schedule',
        icon: 'icon-clock',
        path: 'schedule',
    },
    {
        title: 'My Finances',
        icon: 'icon-finance',
        path: 'my-finances',
    },
    {
        title: 'Questions',
        icon: 'icon-questions',
        path: 'questions',
    },
    {
        title: 'Quizzes',
        icon: 'icon-quizzes',
        path: 'quizzes',
    },
    {
        title: 'Homeworks',
        icon: 'icon-homeworks',
        path: 'homeworks',
    },
    {
        title: 'Documents',
        icon: 'icon-document',
        path: 'documents',
    },
    {
        title: 'Messages',
        // icon: 'icon-email'
        icon: 'icon-document',
        path: 'messages',
    },
    {
        title: 'Lesson Plan',
        // icon: 'icon-lesson'
        icon: 'icon-document',
        path: 'lesson-plan',
    },
    {
        title: 'My Profile',
        // icon: 'icon-gear'
        icon: 'icon-document',
        path: 'my-profile',
    },
];

function SideMenu() {

    const renderMenu = (menus) => {
        if(menus){
            return (
                <ul>
                    {
                        menus.map((menu, index)=> {
                            return <li key={index}>
                                <NavLink to={menu.path} activeClassName="active">
                                    <i className={menu.icon}/>
                                    <span>{menu.title}</span>
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            )
        }
        return null
    };
    const user = useSelector(({users}) => users.user);


    const renderUserName = () => {
        if(user.details){
            return `${user.details.firstName ? user.details.firstName : ''} ${user.details.lastName ? user.details.lastName : ''}`
        }
        return ''
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={() => logout()} key="1">Logout</Menu.Item>
        </Menu>
    );

    return (
        <div className="side-menu h-100 w-100">
            <div className="logo">
                <Image src={require('../../assets/svgs/logo.svg')} alt="Himka" draggable={false}/>
            </div>
            <div className="menu scroll-y">
                {renderMenu(routes)}
            </div>
            {Object.keys(user).length ? <Dropdown overlay={menu} trigger={['click']}>
                <div className="user d-flex flex-row">
                    <Image src={require('../../assets/images/user.jpg')} draggable={false}/>
                    <div className="user-info d-flex flex-column">
                        <span>user</span>
                        <span>{renderUserName()}</span>
                    </div>
                </div>
            </Dropdown> : null}
        </div>
    );
}
export default SideMenu;
