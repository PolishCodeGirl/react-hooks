import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{background: theme.ui}}>Feel the fear and do it antway</li>
                    <li style={{background: theme.ui}}>The third door</li>
                    <li style={{background: theme.ui}}>Slight edge</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;