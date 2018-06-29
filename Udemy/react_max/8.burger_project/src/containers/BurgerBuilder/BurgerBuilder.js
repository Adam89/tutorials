import React, {Component} from 'react';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGRIDIENT_PRICES = {
    salad: 5,
    bacon: 4,
    cheese: 1.3,
    meat: 0.7
}
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => { // convert object to array
            return ingredients[igKey]; // value for given key each valye in array
        })
        .reduce((sum, el) => { // callback executed
            return sum + el;
        }, 0); // turn into sum of all ingriedients sum starts at 0
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
 // .json for firebase
        axios.post('/orders.json', order)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render () {
        const disiabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disiabledInfo) {
            disiabledInfo[key] = disiabledInfo[key] <= 0; // check if ingriendients value is 0 and disable button returns true or false against the key
        }
        let orderSummary = <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchasedCanceled={this.purchaseCancelHanderler}
            purchasedContinued={this.purchaseContinueHandler} />
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
           <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.purchaseCancelHanderler}>
                {orderSummary}
               </Modal>
               <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingriedientsAdded={this.addIngredientHandler}
                    ingriedientsRemoved={this.removeIngredientHandler}
                    disabled={disiabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />
           </Aux>
        );
    }
}

export default BurgerBuilder;