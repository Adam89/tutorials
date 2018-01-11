import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/fetch_post';
class PostsNew extends Component {
    renderField(field) { // field calls this function return JSX wire up to field component. field object returns event handlers that we need to wire up to the jsx
        const { meta: { touched, error } } = field; // destructuring;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
        <div className={className}>
        <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
            {...field.input}
            />
            <div className="text-help">
            {touched ? error : ''}
            </div>
        </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        // call action creator that has api request

        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                label="Title"
                name="title"
                component={this.renderField}
            />
            <Field
                label="Categories"
                name="categories"
                component={this.renderField}
            />
            <Field
                label="Post Content"
                name="content"
                component={this.renderField}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
        );
    }
}


function validate(values) {
    const errors = {}; // empty object if empty form is valid if it has any properties then it is not valid
    //validate inputs from values object
    if (!values.title) {
        errors.title="Enter a title ";
    }
    if(!values.categories) {
        errors.categories = "Enter some categories";
    }
    if(!values.content) {
        errors.content ="Enter some content please";
    }
    return errors;
}


export default reduxForm({
    validate, // key and value the same so only say it once
    form: 'PostsNewForm' //unique string allows isolation
})(
    connect(null, { createPost })(PostsNew) // stack up multiple helpers
);

// reduxForm is similar to connect helper is allows us to communicate with the form reuducer and our component to communicate to the redux store.

// attach reduxForm to the export of the component and pass it a single arg which is a function that has a number of parameters. the first is the form option its the name of the form. the form property allows us to define a unique string.

// validate function gets attached to reduxForm connect helper. this function is called automatically during form lifecycle when a user submits the form for example. give a single args called values contains all the values from the form. you need to return an object that we create from the validate function. its all done through errors object if the object is empty form is valida if errors has any properties redux form assumes the form invalid.

// {field.meta.error} to display error messages

//specify a field and pass it the props the name is what piece of state user is editiing component={} takes in a function or another component which is user to display the component. a field component for each input.

//shortcoming of field component does not know how to render JSX so you need to return a function that shows the JSX. the field just keeps track of a bunch of data. thats why you pass a function to the component prop

// the field parameter passed into the function it contains and event handler or two it links the field component to the JSX. {...field.input} is an object that contains some event handlers and props on change on blur the value ... allows us to pass all the functionality to the input

// onSubmit={} redux form does not post data.
//handleSubmit runs redux form validation then if form is valid call the callback onsubmit takes a function that we define. which gets the values. we bind this because onsubmit is passed as callback in a diffrent scope.

// 3 form states Pristine Touched Invalid

//Pristine: default rendering state on page load

//touched: means a user has focused in and out of input

//Invalid: we got some error and need to show a message