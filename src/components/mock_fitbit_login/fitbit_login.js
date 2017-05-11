import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { get_fitbit, loadSpinner } from '../../actions/index';
import FitbitHeader from './fitbit_header';
class FitbitLogin extends Component {
    /**
     * @param vals
     */
    get_fitbit_data(vals) {
        this.props.get_fitbit(vals);
        browserHistory.push('/activity_note');
        this.props.loadSpinner(true);
    }
    /**
     * @param input
     * @param label
     * @param touched
     * @param error
     * @param custom
     */
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
                    <h1 style={styles.h1}>Login</h1>
                    <form style={styles.form}>
                        <div>
                            <Field name="email"
                                   component={this.renderTextField}
                                   label="Email"
                                   type="text"
                            />
                            <Field name="password"
                                   component={this.renderTextField}
                                   type="password"
                                   label="Password"
                            />
                        </div>
                        <RaisedButton onClick={ handleSubmit((value) => {this.get_fitbit_data(value)}) }
                                      style={styles.button}
                                      label="Login"
                                      primary={true}
                                      fullWidth={true}
                                      type="submit"
                        />
                    </form>
                </Paper>
            </div>
        )
    }
}
/**
 * @param state
 * @returns {{fitbit}}
 */
function mapStateToProps(state) {
    return {
        fitbit: state.fitbit.fitbit[0]
    }
}
FitbitLogin = reduxForm({
    form: 'fitbitForm'
})(FitbitLogin);
export default connect(mapStateToProps, { get_fitbit, loadSpinner })(FitbitLogin);