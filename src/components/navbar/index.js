import React, {useState} from 'react';
// import {NavLink} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './style.css';
import {MenuList} from './data';


function Navbar() {
    const toggleNav = function(){
        let x = document.getElementsByClassName('mobile-btn');
        let y = document.getElementsByClassName('link');
        x[0].classList.toggle('change');
        y[0].classList.toggle('responsive')
    }
    return (
        <div className = "nav-container">
            <ul className = "menu-container link">
            {MenuList.map((ele,index)=>(
                <NavLink
                 key = {index}
                 smooth to = {ele.link}
                 exact activeClassName="active"
                //  location = {{pathname: document.location.pathname + document.location.hash}}
            >{ele.name}</NavLink>
            ))}
            </ul>
            <div className="mobile-btn" onClick ={toggleNav}>
            <div className="bar1"/>
            <div className="bar3"/>
            </div>
        </div>
    )
}

export default Navbar
