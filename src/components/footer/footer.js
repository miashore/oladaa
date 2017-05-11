import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
const updateProfileIcon = <FontIcon className="material-icons">person_pin</FontIcon>;
const yourEventsIcon = <FontIcon className="material-icons">stars</FontIcon>;
const viewAllEventsIcon = <FontIcon className="material-icons">view_list</FontIcon>;
class Footer extends Component {
    /**
     * @param props
     */
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: null
        };
    }
    /**
     * @param index
     */
    select(index){
        this.setState({selectedIndex: index});
    }
    /**
     * @returns {XML}
     */
    render(){
        const styles = {
            paper: {position: 'fixed', bottom: '0', width: '103%', margin: '0 -5px 0 -10px', zIndex: '3'},
            bNav: {textAlign: 'center'}
        };
        return (
            <Paper style={ styles.paper } zDepth={1}>
                <BottomNavigation selectedIndex={ this.state.selectedIndex }>
                    <BottomNavigationItem label="Update Profile" icon={ updateProfileIcon } onTouchTap={() => this.select(0)} />
                    <BottomNavigationItem label="Your Events" icon={ yourEventsIcon } style={styles.bNav} onTouchTap={() => this.select(1)} containerElement={<Link to="/recommended_events" />} />
                    <BottomNavigationItem label="View All Events" icon={ viewAllEventsIcon } style={styles.bNav} onTouchTap={() => this.select(2)} containerElement={<Link to="/view_all"/>}/>
                </BottomNavigation>
            </Paper>
        )
    }
}
export default Footer;