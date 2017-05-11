import React from 'react';
import './app.css';
import Header from './header/header';
import Footer from './footer/footer';
import { Link } from 'react-router';
const App = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
        {/*Remove the below later after testing is done. Used for navigation in localhost:8888*/}
        <h3>Navigation for Testing</h3>
            <br/>
            <Link to="/teapot">Teapot</Link>
            <br/>
        <Link to="/register">Register</Link>
        <br/>
        <Link to="/login">Sign In</Link>
        <br/>
        <Link to="/fitbit_login">Fit Bit Login</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/view_all">View All</Link>
        <br/>
        <Link to="/recommended_events">Recommended Events</Link>
        <br/>
        <Link to="/select_interests">Select Interests</Link>
        <br/>
        <Link to="/welcome_user">Welcome User</Link>
        <br/>
        <Link to="/activity_note">Activity Note</Link>
    </div>
);
export default App;
