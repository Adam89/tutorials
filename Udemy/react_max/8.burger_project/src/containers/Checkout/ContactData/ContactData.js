import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import classes from './ContactData.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

const { purchaseBurger } = actions;
class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        errorMsg: 'Please enter a valid name',
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        errorMsg: 'Please enter a valid street',
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6
        },
        valid: false,
        errorMsg: 'Please enter a valid zipcode',
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        errorMsg: 'Please enter a valid email',
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: 'Fastest',
        validation: {},
        valid: true
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        errorMsg: 'Please enter a valid country',
        touched: false
      },
    },
    formIsValid: false,
  }

  orderHandler = (event) => {
    event.preventDefault();

    const formData = {}; // loop through form and grab key and just value
    for (let formElementIdentifer in this.state.orderForm) { // pumps out all the keys and values
      formData[formElementIdentifer] = this.state.orderForm[formElementIdentifer].value
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    }
debugger;
    this.props.onOrderBurger(order, this.props.token)
   
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid // if empty string
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length >= rules.maxLength && isValid
    }

    return isValid
  }


  inputChangeHandler = (event, inputIdentifier) => { // two way binding
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }; // creates deep clone of new form
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation) // pass value to checkvalidaty and return true false
    updatedFormElement.touched = true
    updatedOrderForm[inputIdentifier] = updatedFormElement; // updates specfic nested obj
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid }); // updates state
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            errorMsg={formElement.config.errorMsg}
            touched={formElement.config.touched}
            change={(event) => this.inputChangeHandler(event, formElement.id)} />
        ))}
        <Button
          btnType="Success"
          clicked={this.orderHandler}
          disabled={!this.state.formIsValid}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients.ingredients,
    price: state.ingredients.totalPrice,
    loading: state.order.loading,
    token: state.authentication.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(purchaseBurger(orderData, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));