import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/index';
import EventCard from '../event_card/event_card';

class ViewAllEventsList extends Component {

    componentWillMount(){
        console.log(this.props.fetchEvents(this.props.location));
    }

    render(){

        const categories = ['Film', 'Arts', 'Food'];
        const list_event = categories.map((event) => <Card>
                                <CardHeader actAsExpander={true}
                                            showExpandableButton={true}
                                            title={event} />
                                            <CardText expandable={true}>
                                                <EventCard />
                                            </CardText>
                                                    </Card>);

            return (
            <Paper zDepth={3}>
                {/*<Card>*/}
                    {/*<CardHeader actAsExpander={true} showExpandableButton={true} title="Sports & Fitness" />*/}
                    {/*<CardText expandable={true}>*/}
                        {/*<EventCard />*/}

                    {/*</CardText>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                    {/*<CardHeader actAsExpander={true} showExpandableButton={true} title="Pets" />*/}
                    {/*<CardText expandable={true}>*/}
                        {/*<EventCard />*/}
                    {/*</CardText>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                    {/*<CardHeader actAsExpander={true} showExpandableButton={true} title="Film" />*/}
                    {/*<CardText expandable={true}>*/}
                        {/*<EventCard />*/}
                        {/*<EventCard />*/}
                        {/*<EventCard />*/}
                        {/*<EventCard />*/}
                    {/*</CardText>*/}
                {/*</Card>*/}
                <Card>{list_event}</Card>
            </Paper>
        );
    }
}

function mapStateToProps(state){
    console.log('State', state);
    return {
        location: state.location.coords
    }
}

export default connect(mapStateToProps, { fetchEvents })(ViewAllEventsList);