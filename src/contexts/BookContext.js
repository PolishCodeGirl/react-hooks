import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
    const [books, setBooks] = useState([
        {title: 'Feel the fear and do it antway', id: 1},
        {title: 'The third door', id: 2},
        {title: 'Slight edge', id: 3},
        {title: 'Think and grow rich', id: 4},
    ])
    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;