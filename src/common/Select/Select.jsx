import React from "react";
import "./Select.scss"
import classNames from "classnames";

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <label>
        <select
            className={classNames('select')}
            value={value}
            onChange={(evt) => onChange(evt.target.value)}
        >
            <option key={value} disabled value={defaultValue}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
        </label>
    );
};

export default Select;