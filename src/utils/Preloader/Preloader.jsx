import React from "react";
import "./Preloader.scss";
import classNames from "classnames";

const Preloader = () => {
    return (
        <div className={classNames('preloader')}>
        <div className={classNames('mosaic-loader')}>
            <div className={classNames('cell', 'd-0')}></div>
            <div className={classNames('cell', 'd-1')}></div>
            <div className={classNames('cell', 'd-2')}></div>
            <div className={classNames('cell', 'd-3')}></div>
            <div className={classNames('cell', 'd-1')}></div>
            <div className={classNames('cell', 'd-2')}></div>
            <div className={classNames('cell', 'd-3')}></div>
            <div className={classNames('cell', 'd-4')}></div>
            <div className={classNames('cell', 'd-2')}></div>
            <div className={classNames('cell', 'd-3')}></div>
            <div className={classNames('cell', 'd-4')}></div>
            <div className={classNames('cell', 'd-5')}></div>
            <div className={classNames('cell', 'd-3')}></div>
            <div className={classNames('cell', 'd-4')}></div>
            <div className={classNames('cell', 'd-5')}></div>
            <div className={classNames('cell', 'd-6')}></div>
        </div>
        </div>
    );
};

export default Preloader;