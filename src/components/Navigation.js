import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.SIGN_IN}>SIGN_IN</Link></li>
            <li><Link to={routes.SIGN_UP}>SIGN_UP</Link></li>
            <li><Link to={routes.LANDING}>LANDING</Link></li>
            <li><Link to={routes.HOME}>HOME</Link></li>
            <li><Link to={routes.ACCOUNT}>ACCOUNT</Link></li>
        </ul>
    </div>


export default Navigation;