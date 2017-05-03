import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends Component {

    submitForm(idk) {
        console.log('Form submitted: ', idk);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                Works!
            </div>
        )
    }

}

export default RegisterForm;