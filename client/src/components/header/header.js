import React from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {
    constructor(props){
    super(props);
    this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const title_style = { textAlign: 'center'};

        return (
            <div>
                <AppBar title="Title"
                        onLeftIconButtonTouchTap={this.handleToggle}
                        style={title_style}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>About Us</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Blog</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Update Location</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Log Out</MenuItem>
                </Drawer>
            </div>
        );
    }
}