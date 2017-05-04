import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';
import Header from './header/header';
import Footer from './footer/footer';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                { this.children }
                <Footer />
            </div>
        );
    }
}

export default App;
