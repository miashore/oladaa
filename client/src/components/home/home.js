import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
// import Weather from './weather';
// import Location from './location';

class Home extends Component {

    render() {

        const styles = {
            mid_container: {height: '100%', width: '100%', background: 'lightblue' }
        };

        return (
            <div>
                <Header/>
                    <div style={styles.mid_container}>
                        Home
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;