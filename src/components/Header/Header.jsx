import React from "react";
import logo from "../../assets/logo-v1.svg";
import "./Header.scss"
import {NavLink} from "react-router-dom";
import classNames from 'classnames';

const Header = () => {
    return (
        <header className={classNames('header')}>
            <div className={classNames('header__container')}>
            <div className={classNames('header__inner')}>
            <div className={classNames('header__logo')}>
                <NavLink to='/'>
                    <img className={classNames('header__logo-img')} alt="Logo" src={logo}/>
                </NavLink>
            </div>
            <nav className={classNames('header__nav', 'nav')}>
                <input id="nav__toggle" type="checkbox"/>
                <label className={classNames('nav__btn')} htmlFor="nav__toggle">
                    <span></span>
                </label>
                <ul className={classNames('nav__box')}>
                <li><NavLink to='/' className={classNames('nav__item')}>Shop</NavLink></li>
                <li><NavLink to='/cart' className={classNames('nav__item')}>Cart</NavLink></li>
                <li><NavLink to='/order/user' className={classNames('nav__item')}>Checkout</NavLink></li>
                </ul>
            </nav>
            </div>
            </div>
        </header>
    );
};

export default Header;