import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <span onClick={() => window.scroll(0, 0)} className="header">
                Watch free movies
            </span>
        </>
    );
}

export default Header;
