import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import EventCard from '../event_card/event_card';
class RecommendedEventsList extends Component {
    render () {
        return (
            <Paper zDepth={3}>
                <Card>
                    <CardTitle title="Your Recommended Events" />
                    <EventCard />
                </Card>
            </Paper>
        )
    }
}
export default RecommendedEventsList;