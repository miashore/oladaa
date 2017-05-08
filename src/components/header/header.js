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
        console.log("logout clicked");
        this.props.logout_user();
        this.handleClose();
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const styles = {
            bar: {width: '100%', textAlign: 'center'},
        };
        console.log("Props is ",this.props);
        return (
            <div>
                <AppBar title="Title"
                        onLeftIconButtonTouchTap={this.handleToggle}
                        style={styles.bar}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/home"/>}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/about"/>}>About Us</MenuItem>
                    <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/blog"/>}>Blog</MenuItem>
                    {/*<MenuItem onTouchTap={this.handleClose}><LocationModal/></MenuItem>*/}
                    <MenuItem><LocationModal /></MenuItem>
                    <MenuItem onTouchTap={() => this.logOutUser()} containerElement={<Link to="/"/>}>Log Out</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default connect(null, {logout_user: logout_user})(Header);
