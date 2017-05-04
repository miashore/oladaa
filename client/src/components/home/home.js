import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../header/header';
import Footer from '../footer/footer';
import Weather from './weather';
import Location from './location';


class Home extends Component {

    componentWillMount() {
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <Header/>
                    Home
                <Footer/>
            </div>
        )
    }
}

export default Home;