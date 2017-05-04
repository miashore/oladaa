import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import EventCard from '../event_card/event_card';

const ViewAllEventsList = () => {
    return (
        <Paper zDepth={3}>
            <Card>
                <CardHeader actAsExpander={true} showExpandableButton={true} title="Sports & Fitness" />
                <CardText expandable={true}>
                    <EventCard />
                </CardText>
            </Card>
            <Card>
                <CardHeader actAsExpander={true} showExpandableButton={true} title="Pets" />
                <CardText expandable={true}>
                    <EventCard />
                </CardText>
            </Card>
            <Card>
                <CardHeader actAsExpander={true} showExpandableButton={true} title="Film" />
                <CardText expandable={true}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </CardText>
            </Card>
        </Paper>
    )
};

export default ViewAllEventsList;