import React, { Component } from 'react';

// import Weather from './weather';

class Home extends Component {

    render() {

        const styles = {
            mid_container: {height: '100%', width: '100%', background: 'lightblue' }
        };

        return (
            <div>
                <div style={styles.mid_container}>
                    Home
                </div>
            </div>
        )
    }
}

export default Home;