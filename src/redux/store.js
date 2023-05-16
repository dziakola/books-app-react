import { createStore } from "redux";
import shortid from "shortid";


const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK': 
            return {...state, books: [...state.books, {...action.payload, id: shortid()}]}
        case 'REMOVE_BOOK':
            return {...state, books: state.books.filter(book=> book.id !== action.payload)}
        default:
            return state;
        }
    }

const initialState = {
    books: [
        { id: 1, title: 'Krzyżacy', author: 'Henryk Sienkiewicz'},
        { id: 2, title: 'Chyłka', author: 'Remigiusz Mróz' }
    ]
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;