import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';
import CircularProgress from 'material-ui/CircularProgress';

class Home extends Component {
    componentWillMount(){
        this.props.fetchWeather(this.props.location);
    }

    renderImage(){
        if(this.props.weather.iconID === undefined) {
            return (
                <CircularProgress />
            )
        }
        return (
            <img src={this.props.weather.iconImg}/>
        )
    }
    render() {
        const { weather } = this.props;

        const styles = {
            mid_container: {height: '100vh', width: '100%', background: 'url(./src/components/imgs/weather/'+this.props.weather.background+') no-repeat center center fixed'},
            weather_div: {zIndex: '5', position: 'fixed', top: '10vh', left: '2vh'},
            weather_icon: {margin: '0'},
            location_text: {margin: '3% 2% 0 1%', display: 'inline-block', verticalAlign: 'top', fontSize: '1.2em'},
        };

        return (
            <div>
                <div style={styles.mid_container}/>
                <div style={styles.weather_div} >
                    { this.renderImage() }
                    <p style={styles.location_text}>{weather.location}</p>
                    <p>{weather.main_description}</p>
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