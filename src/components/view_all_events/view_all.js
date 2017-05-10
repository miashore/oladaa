import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { getEvent, storeUserLocation } from '../../actions/index';
import ViewAllEventCard from '../event_card/view_all_event_card';

class ViewAllEventsList extends Component {

    getEvent(id){
        console.log('TESTING GET EVENT ID:', id);
        this.props.getEvent(id, this.props.location);
    }

    renderCategories(){
        const category_id_array = [32,5,23,14,21,26,31,27,1,15,29,20];
        const categories = this.props.categories;
        if(categories !== undefined){
            const list_categories = categories.map((event, value) => {

                return (
                    <Card key={event.id} value={value} onClick={() => this.getEvent(event.id)}>
                        <CardHeader actAsExpander={true}
                                    showExpandableButton={true}
                                    title={event.name}
                        />
                        <CardText expandable={true}>
                            <ViewAllEventCard />
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

export default connect(mapStateToProps, { getEvent, storeUserLocation })(ViewAllEventsList);