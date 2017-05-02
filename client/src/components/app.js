import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './app.css';

import Footer from './footer/footer';

const App = (props) => {
    injectTapEventPlugin();

    return (
        <div>
            <h1>Working</h1>
            { props.children }
            <Footer className="footer"/>
        </div>
    );
};

export default App;
