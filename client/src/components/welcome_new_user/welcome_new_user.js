import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    const styles = {
        paper: {position: 'relative', height: '100%', width: '100%'},
        h1: {'fontSize': '2em', textAlign: 'center'},
        p: {width: '75%', margin: '0 auto', textAlign: 'center'},
        button: { zIndex: 0, width: '75%', position: 'relative', left: '10%', bottom: '5%', margin: '7% 0 0 0'}
    };
    return (
        <Paper style={styles.paper} zDepth={3}>
            <div style={{padding: '10%'}}>
                <h1 style={styles.h1}>Welcome New User!</h1>
                <p style={styles.p}>Lorem ipsum dolor sit amesmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vot, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <RaisedButton style={styles.button} label="Go to FitBit" primary={true} />
            </div>
        </Paper>
    )
}