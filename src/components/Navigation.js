import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';


const Navigation = ({ authUser }) =>
    <div>
        { authUser
            ? <NavigationAuth />
            : <NavigationAuth />
        }
    </div>

const NavigationAuth = () =>
    
        <ul>
            <li><Link to={routes.SIGN_IN}>SIGN_IN</Link></li>
            {/* <li><Link to={routes.SIGN_UP}>SIGN_UP</Link></li> */}
            <li><Link to={routes.LANDING}>LANDING</Link></li>
            <li><Link to={routes.HOME}>HOME</Link></li>
            <li><Link to={routes.ACCOUNT}>ACCOUNT</Link></li>
            <li><SignOutButton /></li>
        </ul>


const NavigationNonAuth = () =>
    
        <ul>
            <li><Link to={routes.LANDING}>LANDING</Link></li>
            <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        </ul>

    


export default Navigation;