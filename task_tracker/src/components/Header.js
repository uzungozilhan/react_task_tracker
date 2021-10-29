import React from 'react';
import Button from './button';


function Header({ title="Task Tracker" }) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show Create a Task Bar"/>
        </header>
    )
}

export default Header;