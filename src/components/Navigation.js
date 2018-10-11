import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><link to={routes.SIGN_IN}>SIGN_IN</link></li>
            <li><link to={routes.LANDING}>LANDING</link></li>
            <li><link to={routes.HOME}>HOME</link></li>
            <li><link to={routes.ACCOUNT}>ACCOUNT</link></li>
        </ul>
    </div>


export default Navigation;