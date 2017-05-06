import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox'
import { connect } from 'react-redux';
import getIds from './ids';
import { submit_interests } from '../../actions/index';

class SelectInterests extends Component {

    submitForm(vals) {
        console.log('Form submitted: ', vals);
        const idArray = getIds(vals);
        this.props.submit_interests(idArray);
        console.log('ID Array:', idArray);
    }

    renderCheckbox({ input: {name, onChange}, label }) {
        return (
            <Checkbox label={label}
                  name={name}
                  onCheck={onChange}/>
        )
    };
    render() {
        const button_style = { marginLeft: '2%', marginRight: '2%', marginTop: '1%'};
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1>Please Select At Least 3 Interests:</h1>
                <form onSubmit={ handleSubmit( (formValue) => {this.submitForm(formValue)})}>
                    <div>
                        <Field name="sports_fitness" component={this.renderCheckbox} label="Sports & Fitness"/>
                        <Field name="dance" component={this.renderCheckbox} label="Dance"/>
                        <Field name="outdoors_adventures" component={this.renderCheckbox} label="Outdoors & Adventures"/>
                        <Field name="health_wellness" component={this.renderCheckbox} label="Health & Wellness"/>
                        <Field name="music" component={this.renderCheckbox} label="Music"/>
                        <Field name="pets" component={this.renderCheckbox} label="Pets"/>
                        <Field name="social" component={this.renderCheckbox} label="Social"/>
                        <Field name="photography" component={this.renderCheckbox} label="Photography"/>
                        <Field name="arts" component={this.renderCheckbox} label="Arts"/>
                        <Field name="hobbies_crafts" component={this.renderCheckbox} label="Hobbies & Crafts"/>
                        <Field name="scifi_games" component={this.renderCheckbox} label="Sci-Fi & Games"/>
                        <Field name="film" component={this.renderCheckbox} label="Film"/>
                    </div>
                    <RaisedButton style={button_style} type="submit" label="Submit" primary={true} />
                </form>
            </div>
        )
    }
}
SelectInterests = reduxForm({
    form: 'selectInterests'
})(SelectInterests);

export default connect(null, { submit_interests : submit_interests })(SelectInterests);