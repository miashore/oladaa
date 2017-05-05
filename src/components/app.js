import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { Link } from 'react-router';

const App = (props) => (
    <div>
        <Header />
        <Link to="/register">Go To Register</Link>
        {props.children}
        <Footer />
    </div>
);


export default App;
