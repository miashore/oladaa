import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const updateProfileIcon = <FontIcon className="material-icons">person_pin</FontIcon>;
const recommendedEventsIcon = <FontIcon className="material-icons">stars</FontIcon>;
const viewAllEventsIcon = <FontIcon className="material-icons">view_list</FontIcon>;

class Footer extends Component {
    state = {
        selectedIndex: 0
    };

    select = (index) => this.setState({selectedIndex: index});

    render(){
        return (
            <Paper zDepth={1}>
                <BottomNavigation selectedIndex={ this.state.selectedIndex }>
                    <BottomNavigationItem label="Update Profile" icon={ updateProfileIcon } onTouchTap={() => this.select(0)} />
                    <BottomNavigationItem label="Recommended Events" icon={ recommendedEventsIcon } onTouchTap={() => this.select(1)} />
                    <BottomNavigationItem label="View All Events" icon={ viewAllEventsIcon } onTouchTap={() => this.select(2)} />
                </BottomNavigation>
            </Paper>
        )
    }
}

export default Footer;