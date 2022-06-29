import React from "react";
import "./Breadcrumbs.scss";
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const Breadcrumbs = ({pages}) => {

    return (
        <nav className={classNames('breadcrumbs')}>
            {pages.map(el =>
                <NavLink
                key={el.title}
                to={el.link}
                className={classNames('breadcrumbs__item')}>
                {el.title}
                </NavLink>)}
        </nav>
    );
};

export default Breadcrumbs;