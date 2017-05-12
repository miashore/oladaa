import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import EventCard from '../event_card/event_card';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class RecommendedEventsList extends Component {
    render () {
        const styles = {
            body: { width: '90vw', background: 'rgba(255, 255, 255, 0.2)', margin: '3vw auto 0' },
            innerBody: { width: '90vw', background: 'rgba(255, 255, 255, 0.2)', margin: '3vw auto 0', paddingBottom: '2%' },
            populatedBody: {width: '90vw', background: 'rgba(255, 255, 255, 0.8)', margin: '3vw auto 0'},
            error: { width: '75vw', background: 'rgba(255, 255, 255, 0.8)', margin: '0 auto 4vw', padding: '3%' },
            center: { textAlign: 'center' },
            button: {zIndex: 0, width: '100%', margin: '5% auto'}
        };

        if(this.props.auth === true && this.props.fitbit === undefined){
            return (
                <Paper zDepth={3} style={styles.body}>
                    <Card style={styles.innerBody}>
                        <CardTitle title="Your Recommended Events" />
                        <Paper zDepth={2} style={styles.error}>
                            <h3 style={styles.center}>Please Connect Your Fitbit to See Your Recommended Events</h3>
                            <RaisedButton style={styles.button} containerElement={<Link to="/fitbit_login"/>} label="Connect to FitBit" secondary={true}/>
                        </Paper>
                    </Card>
                </Paper>
            )
        }

        return (
            <Paper zDepth={3} style={styles.populatedBody}>
                <Card style={styles.innerBody}>
                    <CardTitle title="Your Recommended Events" />
                    <EventCard />
                </Card>
            </Paper>
        )
    }
}

function mapStateToProps(state){
    console.log('Recommended Events State: ', state);
    return {
        auth: state.auth.authenticated,
        fitbit: state.fitbit.fitbit[0]
    }

}
export default connect(mapStateToProps, { null })(RecommendedEventsList);