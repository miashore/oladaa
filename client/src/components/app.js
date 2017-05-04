import React, { Component } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import ViewAllList from './view_all_events/view_all';

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                { this.children }
                <ViewAllList />
                <Footer />
            </div>
        );
    }
}

export default App;
