export default function() { // always export the function ( reducer ) Step1: create reducer Step:2 Wire it up into the app
    return [
        { title: 'Book 1', pages: 101 }, // key of books and value is output of books reducer
        { title: 'Book 2', pages: 1011 },
        { title: 'Book 3', pages: 103 },
        { title: 'Book 4', pages: 1071 },
    ];
}