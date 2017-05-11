import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const WelcomeNote = () => {

    const styles = {
        paper: {width: '90vw', margin:' 5vw auto 2vw', background: 'rgba(255, 255, 255, 0.93)', padding: '5%'},
        h1: {'fontSize': '2em', textAlign: 'center'},
        p: {width: '95%', margin: '0 auto 5%', textAlign: 'center'},
        button: {zIndex: 0, width: '100%', margin: '7% 0 0 0'}
    };
    return (
        <Paper style={styles.paper} zDepth={3}>
            <div style={{padding: '10%'}}>
                <h1 style={styles.h1}>Welcome!</h1>
                <p style={styles.p}>With your interests we will find the events and activities that you'll actually enjoy.</p>
                <p style={styles.p}>Next you'll log in to your Fitbit so we can combine your interests with your activity level. </p>

                <RaisedButton style={styles.button} containerElement={<Link to="/fitbit_login"/>} label="Go to FitBit"
                              primary={true}/>
            </div>
        </Paper>
    )
};

export default WelcomeNote;