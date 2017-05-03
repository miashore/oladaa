import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    return (
        <Paper style={{position: 'relative', height: '100%', width: '100%'}} zDepth={3}>
            <div style={{padding: '10%'}}>
                <h1 style={{'fontSize': '2em', 'textAlign': 'center'}}>Welcome NewUser!</h1>
                <p style={{width: '75%', margin: '0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vot, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <RaisedButton style={{ zIndex: 0, width: '75%', position: 'relative', left: '10%', bottom: '5%', margin: '7% 0 0 0'}} label="Go to FitBit" primary={true} />
            </div>
        </Paper>
    )
}
