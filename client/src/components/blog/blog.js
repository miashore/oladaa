import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../header/header';
import Footer from '../footer/footer';

class Blog extends Component {

    render() {

        return (
            <div>
                <Header/>
                Blog
                <Footer/>
            </div>
        )
    }
}

export default Blog;