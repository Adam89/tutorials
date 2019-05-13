import React, { Component } from 'react';
import Gift from './Gift';
import { Button } from 'react-bootstrap'
import { max_numbers } from '../helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { gifts: [] }
  }

  addGift = () => {
    const { gifts } = this.state;
    gifts.push({id: max_numbers(this.state.gifts.map(gift => gift.id)) + 1})
    this.setState({ gifts })
  }


  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({gifts})
  }

  render() {
    const { gifts } = this.state;
    return(
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
          gifts.map(gift => {
            return (<Gift key={gift.id}
              gift={gift}
              removeGift={this.removeGift}/>
              )
            })
          }
        </div>
        <Button
          className='btn-add'
          onClick={this.addGift}>
        Add Gift
        </Button>
      </div>
    )
  }
}

export default App;