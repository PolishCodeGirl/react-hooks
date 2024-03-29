import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={event => setTitle(event.target.value)} />
            <input type="text" placeholder="author" value={author} onChange={event => setAuthor(event.target.value)} />
            <input type="submit" value="Add book"/>
        </form>
    );
}
 
export default BookForm;