import Header from './components/header'
import { links } from '../constants'
import React from "react";
import  Profile  from './components/profile';

import Footer from './components/footer';
import ifAuth from '@/lib/ifAuth';

export default function ProfilePag() {
    ifAuth();
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Header links={links} />
            <Profile />
            <Footer/>
        </>

    )
}
