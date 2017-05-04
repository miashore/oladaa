import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RegisterForm extends Component {
    submitForm(idk) {
        console.log('Form submitted: ', idk);
    }

    renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
        <TextField hintText={label}
                   floatingLabelText={label}
                   errorText={touched && error}
                   {...input}
                   {...custom}
        />
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
                    <RaisedButton label="Sign In" secondary={true} />
                </form>
            </div>
        )
    }
}
RegisterForm = reduxForm({
    form: 'addForm'
})(RegisterForm);

export default RegisterForm;