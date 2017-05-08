import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';

class Home extends Component {
    componentWillMount(){
        this.props.fetchWeather(this.props.location);
    }
    componentWillReceiveProps(nextProps){
        this.chooseBackground(nextProps.weather.iconID);
    }

    chooseBackground(code){
        let bkgdImage = '../imgs/weather/';
        switch(code) {
            case '11d':
            case '11n':
                bkgdImage += 'thunderstorm.jpg';
                break;
            case '09d':
            case '09n':
                bkgdImage += 'drizzle.jpg';
                break;
            case '10d':
            case '10n':
                bkgdImage += 'rain.jpg';
                break;
            case '13d':
            case '13n':
                bkgdImage += 'snow.jpg';
                break;
            case '50d':
            case '50n':
                bkgdImage += 'mist.jpg';
                break;
            case '01d':
            case '01n':
                bkgdImage += 'clear.jpg';
                break;
            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                bkgdImage += 'cloudy.jpg';
                break;
            default:
                bkgdImage += 'default.jpeg';
        }
        console.log(bkgdImage);
    }

    render() {

        const styles = {
            mid_container: {height: '100%', width: '100%', background: 'lightblue'}
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
        location: state.location.coords,
        weather: state.weather.weather
    }
}

export default connect(mapStateToProps, { fetchWeather })(Home);