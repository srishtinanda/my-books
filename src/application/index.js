import Header from './header/header';
import BookShelve from './book-shelve';
import React from 'react';
 
export const Application = () => {
    return (
        <div className ="myapp">
            <Header />
            <BookShelve />
        </div>
    );
}