import React, { Component } from 'react';

import button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div>
        <h4>Enter your contact data</h4>
        <form>
          <input type="text" name="name" placeholder="your name"/>
          <input type="email" name="email" placeholder="your email"/>
          <input type="text" name="street" placeholder="your street"/>
          <input type="text" name="postal code" placeholder="postal code"/>
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;