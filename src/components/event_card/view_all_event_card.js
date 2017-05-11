import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { getEvent, storeUserLocation } from '../../actions/index';

class ViewAllEventCard extends Component {

    componentWillMount(){
        console.log('COMPONENT WILL MOUNT!!!!!!!!!!');
        this.props.getEvent(this.props.eventId, this.props.location, this.props.catIndex);
    }

    componentWillReceiveProps(nextProps){
        console.log('CWRP!!!!!!!!!!!');
        const coords = nextProps.coords;
        if(coords && this.props.coords !== coords && coords !== undefined && this.props.coords !== undefined){
            this.props.storeUserLocation(coords);
        }
    }

    getEvent(){
        this.props.getEvent(this.props.location);
    }

    render () {
        console.log('Render events props:', this.props.viewall);

        const events = this.props.viewall[this.props.catIndex];

        console.log('EVENTS!!!!!!!!', events);

        if(events !== undefined) {
            const list_events = events.map((event, index) => {
                console.log('Event ' + index + ' is:', event);
                const date = new Date(event.time).toDateString();
                const time = new Date(event.time).toLocaleTimeString();
                return (
                    <Card style={{width: '75vw', margin: '0 auto 1%'}} key={index}>
                        <CardTitle actAsExpander={true}
                                   subtitle={date + ' @ ' + time}
                                   showExpandableButton={true}
                                   title={event.name}
                                   style={{zIndex: '0'}}/>
                        <CardText expandable={true}>
                            {event.description}
                            <CardActions>
                                <a target="_blank" href={event.event_url}><RaisedButton secondary={true} label="See More Details..."/></a>
                            </CardActions>
                        </CardText>
                    </Card>
                )
            });
            return (
                <div>
                    {list_events}
                </div>
            )
        }
        else {
            return (<Card style={{width: '75vw', margin: '0 auto 1%'}}>
                <CardTitle actAsExpander={true}
                           showExpandableButton={true}
                           title="Loading..."
                           style={{zIndex: '0'}}/>
                <CardText expandable={true}>
                </CardText>
            </Card>)
        }
    }
}

function mapStateToProps(state) {
    console.log('View All Card Event State: ', state);
    return {
        viewall: state.events.viewall
    }
}

export default connect(mapStateToProps, { getEvent, storeUserLocation })(ViewAllEventCard);