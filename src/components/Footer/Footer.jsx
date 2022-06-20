import React from "react";
import "./Footer.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <footer className={classNames('footer')}>
            <div className={classNames('footer__container')}>
            Copyright {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;