export function selectBook(book) { // simple function which takes object book and title
    console.log('A book has been selected', book.title)
        // selectBook is an Action creater needs to return action an object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

// actions has two values a type and payload confirms the condition of the action. Every action must have a type that described the action

//type is usually uppercase