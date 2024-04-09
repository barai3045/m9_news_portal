import React from 'react';
import AppNavBar from './AppNavBar';
import Footer from './Footer';

const PlainLayout = (props) => {
    return (
        <>
            <AppNavBar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default PlainLayout;