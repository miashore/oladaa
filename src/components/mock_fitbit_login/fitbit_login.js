import React, { Component } from 'react';
import FitbitHeader from './fitbit_header';
import Paper from 'material-ui/Paper';

class FitbitLogin extends Component {
    render(){
        const styles = {
            body: { marginTop: '15vh'}
        };
        return(
            <div>
                <FitbitHeader />
                <Paper style={styles.body}>
                    <h1>Fitbit login</h1>
                </Paper>
            </div>
        )
    }
}

export default FitbitLogin;