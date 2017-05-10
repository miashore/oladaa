import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/index';
import EventCard from '../event_card/event_card';

class ViewAllEventsList extends Component {

    renderCategories(){
        const categories = this.props.categories[0];
        if(categories !== undefined){
            const list_categories = categories.map((event) => {
                return (
                    <Card key={event}>
                        <CardHeader actAsExpander={true}
                                    showExpandableButton={true}
                                    title={event}
                        />
                        <CardText expandable={true}>
                            <EventCard />
                        </CardText>
                    </Card>
                );
            });
            return list_categories;
        }
    }

    render(){
        const category_id_array = [32,5,23,14,21,26,31,27,1,15,29,20];
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

export default connect(mapStateToProps, { fetchEvents })(ViewAllEventsList);