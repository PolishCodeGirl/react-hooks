import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>PolisCodeGirl read books list</h1>
            <p>I have read {books.length} books already this year</p>
        </div>
    );
}
 
export default Navbar;