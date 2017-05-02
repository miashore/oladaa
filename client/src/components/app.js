import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import logo from './imgs/logo.svg';

import Header from './header/header';

const App = (props) => {
    injectTapEventPlugin();
    return (
        <div>
            <Header />
            { props.children }
        </div>
    )
};

export default App;
