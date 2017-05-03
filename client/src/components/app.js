import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import logo from './imgs/logo.svg';

import Header from './header/header';
import RegisterForm from './register_new_user/register_new_user'

const App = (props) => {
    injectTapEventPlugin();
    return (
        <div>
            <div>
                <Header />
            </div>
            { props.children }
            <div>
                <RegisterForm />
            </div>
        </div>
    )
};

export default App;
