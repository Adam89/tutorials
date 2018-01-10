import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) { // field calls this function return JSX wire up to field component. field object returns event handlers that we need to wire up to the jsx
        return (
        <div className="form-group">
        <label>{field.label}</label>
            <input
                className="form-control"
                type="text"
            {...field.input}
            />
        </div>
        );
    }



    render() {
        return (
        <form>
            <Field
                label="Title"
                name="title"
                component={this.renderField}
            />
            <Field
                label="Tags"
                name="tags"
                component={this.renderField}
            />
            <Field
                label="Post Content"
                name="content"
                component={this.renderField}
            />
        </form>
        );
    }
}


export default reduxForm({
    form: 'PostsNewForm' //unique string allows isolation
})(PostsNew);

// reduxForm is similar to connect helper is allows us to communicate with the form reuducer and our component to communicate to the redux store. 

// attach reduxForm to the export of the component and pass it a single arg which is a function that has a number of parameters. the first is the form option its the name of the form. the form property allows us to define a unique string.

//specify a field and pass it the props the name is what piece of state user is editiing component={} takes in a function or another component which is user to display the component. a field component for each input.

//shortcoming of field component does not know how to render JSX so you need to return a function that shows the JSX. the field just keeps track of a bunch of data. thats why you pass a function to the component prop

// the field parameter passed into the function it contains and event handler or two it links the field component to the JSX. {...field.input} is an object that contains some event handlers and props on change on blur the value ... allows us to pass all the functionality to the input