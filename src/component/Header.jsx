import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>this is header</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;