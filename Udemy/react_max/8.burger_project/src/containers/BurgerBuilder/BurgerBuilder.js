import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actionTypes from "../../store/actions";

const { ADD_INGREDIENT, REMOVE_INGREDIENT } = actionTypes;


class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: null
  };

  componentDidMount() {
    // axios.get('https://my-burget-52cc0.firebaseio.com/ingredients.json')
    // .then(response => {
    //     this.setState({ingredients: response.data});
    // }).catch(error =>{
    //     this.setState({error: true})
    // });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        // convert object to array
        return ingredients[igKey]; // value for given key each value in array
      })
      .reduce((sum, el) => {
        // callback executed
        return sum + el;
      }, 0); // turn into sum of all ingredients sum starts at 0
    this.setState({ purchasable: sum > 0 });
  }


  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHanderler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams = []; // will eventually contain ingredients
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      ); // allows us to construct ingredients object ready to append to url
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };
  render() {
    const disiabledInfo = {
      ...this.props.ings
    };
    for (let key in disiabledInfo) {
      disiabledInfo[key] = disiabledInfo[key] <= 0; // check if ingriendients value is 0 and disable button returns true or false against the key
    }
    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients error</p> : <Spinner />;
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingriedientsAdded={this.props.onIngredientAdded}
            ingriedientsRemoved={this.props.onIngredientRemoved}
            disabled={disiabledInfo}
            price={this.props.price}
            ordered={this.purchaseHandler}
            purchasable={this.state.purchasable}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ings}
          purchasedCanceled={this.purchaseCancelHanderler}
          purchasedContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHanderler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return { 
    ings: state.ingredients.ingredients,
    price: state.ingredients.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({
        type: ADD_INGREDIENT,
        payload: {
          ingredientName: ingName
        }
      }),
      onIngredientRemoved: (ingName) =>
      dispatch({
        type: REMOVE_INGREDIENT,
        payload: {
          ingredientName: ingName
        }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios)); // pass axios to error hoc
