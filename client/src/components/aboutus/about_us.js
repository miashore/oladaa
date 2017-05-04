import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../header/header';
import Footer from '../footer/footer';

class About extends Component {

    render() {

        return (
            <div>
                <Header/>
                About Us
                <Footer/>
            </div>
        )
    }
}

export default About;