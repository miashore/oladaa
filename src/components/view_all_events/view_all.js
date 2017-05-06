import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { fetchEvents, storeUserLocation } from '../../actions/index';
import EventCard from '../event_card/event_card';

class ViewAllEventsList extends Component {

    componentWillMount(){
        console.log('props: ', this.props);
    }

    render(){
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
        );
    }
}

export default connect(null, { fetchEvents, storeUserLocation })(ViewAllEventsList);