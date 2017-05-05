import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class Header extends React.Component {
    constructor(props){
    super(props);
    this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const styles = {
            bar: {width: '100%', textAlign: 'center'}
        };

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
                    <MenuItem onTouchTap={this.handleClose}>Location</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Log Out</MenuItem>
                </Drawer>
            </div>
        );
    }
}