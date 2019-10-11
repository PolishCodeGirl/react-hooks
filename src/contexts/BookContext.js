import React, { createContext, useReducer, useEffect } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: '21 Lessons for the 21st Century', author: 'Yuval Noah Harari', id: 1},
        {title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', id: 2},
    ], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;