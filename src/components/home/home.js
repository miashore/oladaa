import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';

class Home extends Component {

    componentWillMount(){

    }

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

function mapStateToProps(state){
    console.log('Home state: ', state);
    return {
        location: this.location
    }
}

export default connect(mapStateToProps, { fetchWeather })(Home);