import React from 'react';
import { auth } from '../firebase';


const SignOutPage = () =>
    <button
        type="button"
        onClick={auth.doSignOut} >

        Sign Out Page
    </button>

export default SignOutPage;