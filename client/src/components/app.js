import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import Header from './header/header';
import Footer from './footer/footer';

const App = (props) => {
    injectTapEventPlugin();

    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    );
};

export default App;
