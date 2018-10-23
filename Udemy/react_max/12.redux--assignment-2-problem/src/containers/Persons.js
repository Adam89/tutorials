import React, { Component } from 'react';
import { connect } from 'react-redux'; //HOC used on export
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

const { ADD_PERSON, DELETE_PERSON } = actionTypes;

class Persons extends Component {


    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    persons: state.person.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
  onAddedPerson: (name, age) => dispatch({type: ADD_PERSON, payload: { name: name, age: age}}),
  onDeletePerson: (id) => dispatch({type: DELETE_PERSON, payload: {
    personId: id }})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);