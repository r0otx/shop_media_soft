import React from "react";
import "./Input.scss";

const Input = ({...props}) => {
    return (
        <input type="text" {...props}/>
    );
};

export default Input;