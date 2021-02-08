import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';


const headerstyle = {
    fontFamily: "fantasy",
    fontsize: '100px'
}

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1 style={headerstyle}>CHRONIC</h1>
                    <p>®</p>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to = '/about' activeStyle>
                      ABOUT
                    </NavLink>
                    <NavLink to = '/cotact-us' activeStyle>
                        CONTACT US
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
