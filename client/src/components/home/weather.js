import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Weather extends Component {

    componentWillMount() {
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Weather;