import React from "react"
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Header(props){
    const {countCartItems} = props;
    return(
        <IconContext.Provider value={{ color: "grey", size:"1.5em", className: "global-class-name" }}>
        <header className="row block center">
            <div>
                <a href="#/">
                <h1 className="Name">PlantShed</h1>
                <img className="logo"src={require('../images/logo.png')}></img>
                </a>  
            </div>
                <div>
                    <a href="/" className="NavBarLinks">Home</a>
                    <a href="#/"className="NavBarLinks">Coffee</a>
                    <a href="/Plants"className="NavBarLinks">Plants</a>
                    <a href="#/"className="NavBarLinks">About Us</a>
                </div>
            <div>
            <a href="#/cart">
                <FaShoppingCart /> {" "}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                    ) : ( 
                        ''
                     )}
                </a>
                <a href="#/signin">
                    <FaUserAlt />
                </a>
            </div>
        </header>
        </IconContext.Provider>
    );
}