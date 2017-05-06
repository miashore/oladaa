import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

import Location from './location';

export default class LocationModal extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                // disabled={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                {/*<label onTouchTap={this.handleOpen}>Update Location</label>*/}
                <MenuItem onTouchTap={this.handleOpen}>Update Location</MenuItem>
                <Dialog
                    title="Your Current Location:"
                    actions={actions}
                    modal={true}
                    open={this.state.open}>
                    <Location/>

                </Dialog>
            </div>
        );
    }
}