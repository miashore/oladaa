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
            card: {width: '75vw', margin: '0 auto 3%'},
            button: {marginTop: '4%'},
            text: {letterSpacing: '1px', fontSize: '.9em', padding: '0 16px'},
            title: {zIndex: '0', fontSize: '1.2em', lineHeight: '1.1em', textAlign: 'center'}
        };

        if(events !== undefined) {
            const list_events = events.map((event, index) => {
                const date = new Date(event.time).toDateString();
                const time = new Date(event.time).toLocaleTimeString();
                return (
                    <Card zDepth={4} style={styles.card} key={index}>
                        <CardTitle actAsExpander={true}
                                   showExpandableButton={true}
                                   subtitle={date + ' @ ' + time}
                                   title={event.name}
                                   style={styles.title}
                                   />
                        <CardText style={styles.text} expandable={true}>
                            {event.description}
                            <CardActions>
                                <a target="_blank" href={event.event_url}><RaisedButton style={styles.button} secondary={true} label="See More Details..."/></a>
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
            return (
                <Card zDepth={4} style={styles.card}>
                    <CardTitle actAsExpander={true}
                               showExpandableButton={true}
                               title="Loading..."
                               style={styles.title}/>
                    <CardText style={styles.text} expandable={true}>
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