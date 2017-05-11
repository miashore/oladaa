import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import EventCard from '../event_card/event_card';
import { connect } from 'react-redux';

class RecommendedEventsList extends Component {
    render () {
        const styles = {
            body: { width: '90vw', background: 'rgba(255, 255, 255, 0.2)', margin: '3vw auto 0', paddingBottom: '5%' },
            error: { width: '75vw', background: 'rgba(255, 255, 255, 0.8)', margin: '0 auto 3vw', padding: '3%' },
            center: { textAlign: 'center' }
        };

        if(this.props.auth === true && this.props.fitbit === undefined){
            return (
                <Paper zDepth={3} style={styles.body}>
                    <Card style={styles.body}>
                        <CardTitle title="Your Recommended Events" />
                        <Paper zDepth={2} style={styles.error}>
                            <h2 style={styles.center}>Please Connect Your Fitbit to See Recommended Events</h2>
                        </Paper>
                    </Card>
                </Paper>
            )
        }

        return (
            <Paper zDepth={3} style={styles.body}>
                <Card style={styles.body}>
                    <CardTitle title="Your Recommended Events" />
                    <EventCard />
                </Card>
            </Paper>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth.authenticated,
        fitbit: state.fitbit.fitbit[0]
    }

}
export default connect(mapStateToProps, { null })(RecommendedEventsList);