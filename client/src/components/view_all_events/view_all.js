import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import EventCard from '../event_card/event_card';

const ViewAllEventsList = () => {
    return (
        <Card>
            <CardHeader actAsExpander={true} showExpandableButton={true} title="Event Name" subtitle="Event Subtitle" />
            <EventCard />
        </Card>
    )
};

export default ViewAllEventsList;