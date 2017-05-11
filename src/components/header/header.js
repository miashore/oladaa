import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LocationModal from '../location/location_modal';
import {logout_user} from '../../actions/index';
class Header extends Component {
    constructor(props){
    super(props);
    this.state = {open: false};
    }
    logOutUser(){
        document.cookie = 'activity_score=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
        this.props.logout_user();
        this.handleClose();        
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    render() {
        const styles = {
            bar: {textAlign: 'center'},
            logo: {marginTop: '5px'}
        };
        return (
            <div>
                <AppBar
                        onLeftIconButtonTouchTap={this.handleToggle}
                        style={styles.bar}
                        title={<img style={styles.logo} src="../../src/components/imgs/oladaa.png" />}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    style={styles.bar}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/home"/>}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/about"/>}>About Us</MenuItem>
                    {/*<MenuItem onTouchTap={this.handleClose}><LocationModal/></MenuItem>*/}
                    <MenuItem><LocationModal /></MenuItem>
                    <MenuItem onTouchTap={() => this.logOutUser()} containerElement={<Link to="/"/>}>Log Out</MenuItem>
                </Drawer>
            </div>
        );
    }
}
export default connect(null, {logout_user: logout_user})(Header);
