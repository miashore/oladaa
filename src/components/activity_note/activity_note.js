import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { storeUserLocation, fetchEvents } from '../../actions/index';
import { geolocated } from 'react-geolocated';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
class ActivityNote extends Component {
    /**
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        const coords = nextProps.coords;
        if(coords && this.props.coords !== coords && coords !== undefined && this.props.coords !== undefined){
            this.props.storeUserLocation(coords);
            this.props.fetchEvents(this.props.location);
        }
    }
    /**
     * @returns {XML}
     */
    render(){
        const styles = {
            paper: { width: '90vw', margin:' 5vw auto 2vw', background: 'rgba(255, 255, 255, 0.93)', padding: '5%'},
            h1: {fontSize: '2em', textAlign: 'center'},
            h3: {color: '#9CCC65', 'textAlign': 'center'},
            p: {textAlign: 'center', width: '75%', margin: '0 auto'},
            button: { zIndex: 0, width: '100%', margin: '3% auto' },
            spinner: { width: '40vw', margin: '0 auto' },
            body: {width: '50vw', margin: '0 auto' }
        };
        if(!this.props.ready){
            return (
                <Paper style={styles.paper} zDepth={3}>
                    <div style={{padding: '10%'}}>
                        <h1 style={styles.h1}>Hey there!</h1>
                        <h3 style={styles.h3}>You've successfully connected to Fitbit!</h3>
                        <p style={styles.p}> Based on your activity level from yesterday and your interests we've found events you may like. Come back tomorrow to see new ones!</p>
                        <div style={styles.spinner}>
                            <CircularProgress />
                        </div>
                    </div>
                </Paper>
            );
        }
        return (
            <Paper style={styles.paper} zDepth={3}>
                <div style={{padding: '10%'}}>
                    <h1 style={styles.h1}>Hey there!</h1>
                    <h3 style={styles.h3}>You've successfully connected to Fitbit!</h3>
                    <p style={styles.p}> Based on your activity level from yesterday and your interests we've found events you may like. Come back tomorrow to see new ones!</p>
                    <RaisedButton containerElement={<Link to="/app/recommended_events"/>} style={styles.button} label="Take Me to These Events!" primary={true} />
                </div>
            </Paper>
        )
    }
}
function mapStateToProps(state){
    console.log('State: ', state);
    return{
        location: state.location.coords,
        ready: state.events.ready
    }
}
export default connect(mapStateToProps, { storeUserLocation, fetchEvents })(geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000
})(ActivityNote));