import React, { Component } from 'react';
import {connect} from 'react-redux';

//hook book detail to redux store so it gets told of changes to active book state
//import connect helper connect app state to props of this container map state to props and connect it to book detail
class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started</div>
        }
        return (
            <div>
            <h3>Details for:</h3>
            <div>Title: {this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

// define helper funciton


function mapStateToProps(state) { // acess apps state
    return {
        book: state.activeBook // shows up as props inside book detail
    }
}


export default connect(mapStateToProps)(BookDetail)