import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
    const [books, setBooks] = useState([
        {title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', id: 1},
        {title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', id: 2},
    ]);

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid()}]);
    }

    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;