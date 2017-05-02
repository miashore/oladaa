import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {

    registerForm(idk){
        console.log('Form Submitted: ', idk);
    }

    render () {

        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={ handleSubmit( (formValue) => { this.loginSubmit(formValue) })} >
                    <div>
                        <label>Username:</label>
                        <Field name="username"
                               component="input"
                               type="text"
                               className="form-control"/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field name="email"
                               component="input"
                               type="text"
                               className="form-control"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field name="password"
                               component="input"
                               type="text"
                               className="form-control"/>
                    </div>
                    <div>
                        <label>Password Confirmation:</label>
                        <Field name="password_confirmation"
                               component="input"
                               type="text"
                               className="form-control"/>
                    </div>
                    <button className="btn btn-success">Sign In</button>
                </form>
            </div>
        )
    }
}

RegisterForm = reduxForm({
    form: 'registerForm'
})(RegisterForm);

export default RegisterForm;