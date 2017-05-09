import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Location from './location';

class LocationModal extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
        <div>
            <TextField hintText={label}
                       floatingLabelText={label}
                       errorText={touched && error}
                       {...input}
                       {...custom}
            />
        </div>

    );

    render() {

        const actions = [
            <RaisedButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
            <RaisedButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
                type="submit"
            />,
        ];

        return (
            <div>
                <MenuItem onTouchTap={this.handleOpen}>Update Location</MenuItem>
                <Dialog
                    title="Your Current Location:"
                    actions={actions}
                    modal={true}
                    open={this.state.open}>
                    <Location/>
                    <form>
                        <div>
                            <Field name="Location"
                                   component={this.renderTextField}
                                   type="text"
                                   label="Location"/>
                        </div>
                    </form>
                </Dialog>
            </div>
        );
    }
}

LocationModal = reduxForm({
    form: 'location'
})(LocationModal);

export default connect( null, { null })(LocationModal);