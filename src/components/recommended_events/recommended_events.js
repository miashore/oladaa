import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import EventCard from '../event_card/event_card';

const RecommendedEventsList = () => {
    return (
        <Paper zDepth={3}>
            <Card>
                <CardTitle title="Your Recommended Events" />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </Card>
        </Paper>
    )
};

export default RecommendedEventsList;