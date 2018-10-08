import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
class ContactData extends Component {

  state = {
    // name: '',
    // email: '',
    // address: {
    //   street: '',
    //   postalCode: ''
    // },
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options:[
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      // street: 'testStreet',
      // postCode: 'n22 6bp',
      // country: 'United Kingdom',
      // email: 'adamhopkins87@gmail.com',
      // deliveryMethod: 'fast'
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
     this.setState({loading: true});
     const formData = {}; // loop through form and grab key and just value
     for ( let formElementIdentifer in this.state.orderForm) { // pumps out all the keys and values
       formData[formElementIdentifer] = this.state.orderForm[formElementIdentifer].value
     }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
        }

        axios.post('/orders.json', order)  // .json for firebase
            .then(response => {
                this.setState({ loading: false  });
                this.props.history.push('/'); // push back to home after submmiting burger
            })
            .catch(error => {
                this.setState({ loading: false });
            });
          }

  inputChangeHandler = (event,inputIdentifier) => { // two way binding
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]}; // creates deep clone of new form
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement; // updates specfic nested obj
    this.setState({orderForm: updatedOrderForm}); // updates state
    console.log(event.target.value)
    console.log(updatedOrderForm)
  }

  render () {
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
          change={(event) => this.inputChangeHandler(event, formElement.id)}/>
        ))}
        <Button 
          btnType="Success"
          clicked={this.orderHandler}>Order</Button>
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

export default ContactData;