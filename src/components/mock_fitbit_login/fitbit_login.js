import React, { Component } from 'react';
import FitbitHeader from './fitbit_header';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class FitbitLogin extends Component {

    submitForm(vals){
        console.log('Form submitted: ', vals);

    }

    renderTextfield = ({label, input}) => (

            <TextField
                floatingLabelText={label}
                hintText={label}
                {...input}
            />
    );

    render(){
        const styles = {
            body: { margin: '15vh auto 0', width: '75vw', padding: '10%' },
            form: { margin: '0 auto' },
            button: { marginTop: '5%' },
            h1: { textAlign: 'center', color: '#444' }
        };
        const { handleSubmit } = this.props;
        return(
            <div>
                <FitbitHeader />
                <Paper style={styles.body}>
                    <h1 style={styles.h1}>Log in</h1>
                    <form style={styles.form} onSubmit={ handleSubmit((formValue) => {this.submitForm(formValue)}) }>
                        <div>
                            <Field name="email"
                                   component={this.renderTextfield}
                                   label="Email"
                                   type="text"
                            />
                            <Field name="password"
                                   component={this.renderTextfield}
                                   type="password"
                                   label="Password"
                                   floatingLabelText="Password"
                            />
                        </div>
                        <RaisedButton style={styles.button} type="submit" label="Log In" primary={true} fullWidth={true} />
                    </form>
                </Paper>
            </div>
        )
    }
}
FitbitLogin = reduxForm({
    form: 'fitbitForm'
})(FitbitLogin);

export default connect(null, { null })(FitbitLogin);