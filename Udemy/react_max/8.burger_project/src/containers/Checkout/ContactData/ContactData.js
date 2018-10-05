import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
class ContactData extends Component {
  
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients)
     this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Adam',
                address: {
                    street: 'testStreet',
                    postCode: 'n22 6bp',
                    country: 'United Kingdom'
                },
                email: 'adamhopkins87@gmail.com'
            },
            deliveryMethod: 'fast'
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

  render() {
    let form = ( 
        <form>
        <input className={classes.Input} type="text" name="name" placeholder="your name"/>
        <input className={classes.Input} type="email" name="email" placeholder="your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="your street"/>
        <input className={classes.Input} type="text" name="postal code" placeholder="postal code"/>
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