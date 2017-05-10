import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/index';
import { Link } from 'react-router';

class EventCard extends Component {

    render () {
        const events = this.props.all;
        if(events !== undefined) {
            const list_events = events.map((event, index) => {
                console.log('Event ' + index + ' is:', event);
                return (
                    <Card style={{width: '75vw', margin: '0 auto 1%'}} key={index}>
                        <CardTitle actAsExpander={true}
                                   showExpandableButton={true}
                                   title={event.name}
                                   {/*subtitle={event.event_url}*/}
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
    console.log('Event Card State: ', state);
    return {
        all: state.events.all[0]
    }
}

export default connect(mapStateToProps, { fetchEvents })(EventCard);