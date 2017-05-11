import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { getEvent } from '../../actions/index';
import ViewAllEventCard from '../event_card/view_all_event_card';

class ViewAllEventsList extends Component {

    getEvent(id, index){
        this.props.getEvent(id, this.props.location, index);
    }

    renderCategories(){
        console.log(this.props);
        const categories = this.props.categories;
        if(categories !== undefined){
            const list_categories = categories.map((event, index) => {

                return (
                    <Card key={event.id} value={index} onTouchTap={() => this.getEvent(event.id, index)}>
                        <CardHeader actAsExpander={true}
                                    showExpandableButton={true}
                                    title={event.name}
                        />
                        <CardText expandable={true}>
                            <ViewAllEventCard catIndex={index} eventId={event.id} location={this.props.location} />
                        </CardText>
                    </Card>
                );
            });
            return list_categories;
        }
    }

    render(){

            return (
            <Paper zDepth={3}>
                <Card>{this.renderCategories()}</Card>
            </Paper>
        );
    }
}
function mapStateToProps(state){
    console.log('View All State: ', state);
    return {
        location: state.location.coords,
        events: state.events.all[0],
        categories: state.events.categories
    }
}

export default connect(mapStateToProps, { getEvent })(ViewAllEventsList);