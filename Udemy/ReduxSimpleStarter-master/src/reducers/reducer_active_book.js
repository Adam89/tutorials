// state argument is not application state, only the state that this reducers
//is responsible for.
// if state is undefined set to null
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED': // if action type is book selected
        return action.payload // return selected book
    }
    return state // hits this on inital load
}