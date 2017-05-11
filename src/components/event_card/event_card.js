import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/index';
class EventCard extends Component {
    /**
     * @returns {XML}
     */
    render () {
        const events = this.props.all;

        const styles = {
            card: {width: '75vw', margin: '0 auto 1%'}
        };

        if(events !== undefined) {
            const list_events = events.map((event, index) => {
                console.log('Event ' + index + ' is:', event);
                const date = new Date(event.time).toDateString();
                const time = new Date(event.time).toLocaleTimeString();
                return (
                    <Card style={styles.card} key={index}>
                        <CardTitle actAsExpander={true}
                                   showExpandableButton={true}
                                   subtitle={date + ' @ ' + time}
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
            return (<Card style={styles.card}>
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
/**
 * @param state
 * @returns {{all}}
 */
function mapStateToProps(state) {
    console.log('Event Card State: ', state);
    return {
        all: state.events.all[0]
    }
}
export default connect(mapStateToProps, { fetchEvents })(EventCard);