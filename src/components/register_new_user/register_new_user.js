import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { register_user } from '../../actions/index';
import { Link } from 'react-router';

class RegisterForm extends Component {
    submitForm(vals) {
        const registerInfo = (vals);
        this.props.register_user(vals);
        console.log('Registration Form Info: ', registerInfo)
    }
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
        const button_style = { marginLeft: '2%', marginRight: '2%', marginTop: '1%'};
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={ handleSubmit( (formValue) => {this.submitForm(formValue)})}>
                    <div className="form-group">
                        <Field name="username"
                               component={this.renderTextField}
                               type="text"
                               label="Username"
                               />
                    </div>
                    <div className="form-group">
                        <Field name="email"
                               component={this.renderTextField}
                               type="text"
                               label="Email"
                        />
                    </div>
                    <div className="form-group">
                        <Field name="password"
                               component={this.renderTextField}
                               type="password"
                               label="Password"
                        />
                    </div>
                    <div className="form-group">
                        <Field name="password_confirmation"
                               component={this.renderTextField}
                               type="password"
                               label="Password Confirmation"
                        />
                    </div>
                    <RaisedButton style={button_style} type="submit" label="Register" primary={true} />
                    <RaisedButton label="Sign In" containerElement={<Link to="/login"/>} secondary={true} />
                </form>
            </div>
        )
    }
}
function validateEmail(email) {
    const allowedChars = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return allowedChars.test(email);
}
function validateUserName(username){
    const allowedChars = /[*|\": <>#[\]{}%^`\\?!()';@&$]/;
    return allowedChars.test(username)
}
function validatePassword(password){
    const space = /[ ]/;
    return space.test(password)
}
function validate(vals){
    const errors = {};

    if(!vals.username) {
        errors.username = "Please enter a Username";
    }
    if(validateUserName(vals.username)){
        errors.username = 'Please enter a valid Username';
    }
    if(!validateEmail(vals.email)){
        errors.email = 'Please enter a valid Email Address';
    }
    if(!vals.password) {
        errors.password = "Please enter a Password";
    }
    if(validatePassword(vals.password)){
        errors.password = "Password must not contain spaces";
    }
    if(!vals.password_confirmation){
        errors.password_confirmation = 'Please confirm your password';
    }
    if(vals.password !== vals.password_confirmation){
        errors.password_confirmation = "Passwords do not match";
    }
    return errors;
}
RegisterForm = reduxForm({
    form: 'registerUser',
    validate
})(RegisterForm);

export default connect(null, { register_user })(RegisterForm);