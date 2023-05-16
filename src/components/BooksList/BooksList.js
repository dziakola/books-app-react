import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const BookList = () => {
    const books = useSelector(state=>state.books)
    const dispatch = useDispatch();

    const removeBooks = bookId => {
        dispatch({type: 'REMOVE_BOOK', payload: bookId})
    }
    
    return(
        <ul>{books.map(book => 
            <li key={book.id}> {book.title} by {book.author} 
                <button onClick={() => removeBooks(book.id)}> Remove </button>
            </li> )}
        </ul>
    )
}
export default BookList;