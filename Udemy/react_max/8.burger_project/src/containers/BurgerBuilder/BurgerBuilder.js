import React, {Component} from 'react';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 4,
    cheese: 1.3,
    meat: 0.7
}
class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
      console.log(this.props);
        axios.get('https://my-burget-52cc0.firebaseio.com/ingredients.json')
        .then(response => {
            this.setState({ingredients: response.data});
        }).catch(error =>{
            this.setState({error: true})
        });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => { // convert object to array
            return ingredients[igKey]; // value for given key each value in array
        })
        .reduce((sum, el) => { // callback executed
            return sum + el;
            }, 0); // turn into sum of all ingredients sum starts at 0
        this.setState({purchasable: sum > 0})
        console.log(ingredients);
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount);
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; // new value
        const priceAddition = INGRIDIENT_PRICES[type]; // gets value of item price
        const oldPrice = this.state.totalPrice; // gets inital total price
        const newPrice = oldPrice + priceAddition; // calcs new total
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); // set new state
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return false;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount; // new value
        const priceDeduction = INGRIDIENT_PRICES[type]; // gets value of item price
        const oldPrice = this.state.totalPrice; // gets inital total price
        const newPrice = oldPrice - priceDeduction; // calcs new total
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients }); // set new state
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    purchaseCancelHanderler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
      const queryParams = []; // will eventually contain ingredients
      for (let i in this.state.ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i])); // allows us to construct ingredients object ready to append to url
      }
      const queryString = queryParams.join('&');
      this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
      });
        // this.setState({loading: true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Adam',
        //         address: {
        //             street: 'testStreet',
        //             postCode: 'n22 6bp',
        //             country: 'United Kingdom'
        //         },
        //         email: 'adamhopkins87@gmail.com'
        //     },
        //     deliveryMethod: 'fast'
        // }

        // axios.post('/orders.json', order)  // .json for firebase
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false });
        //     });
    }
    render () {
        const disiabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disiabledInfo) {
            disiabledInfo[key] = disiabledInfo[key] <= 0; // check if ingriendients value is 0 and disable button returns true or false against the key
        }
        let orderSummary = null 
        let burger = this.state.error ? <p>Ingredients error</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = ( 
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingriedientsAdded={this.addIngredientHandler}
                    ingriedientsRemoved={this.removeIngredientHandler}
                    disabled={disiabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />
            </Aux>);
            orderSummary = <OrderSummary
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchasedCanceled={this.purchaseCancelHanderler}
                purchasedContinued={this.purchaseContinueHandler} />
        }
        if (this.state.loading) {
          orderSummary = <Spinner />;
        }
        return (
           <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHanderler}>
                {orderSummary}
               </Modal>
              {burger}
           </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios); // pass axios to error hoc