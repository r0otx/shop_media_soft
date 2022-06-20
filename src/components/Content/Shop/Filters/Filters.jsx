import React from "react";
import "./Filters.scss"
import classNames from "classnames";
import Select from "../../../../common/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../../../../redux/actions/products";

const Filters = () => {

    const sort = useSelector(state => state.products.sort);
    const dispatch = useDispatch();
    const filters = [
        {value: "title", name: "Name"},
        {value: "price", name: "Price"}
    ]
    const selectHandle = (evt) => {
        dispatch(setSort(evt))
    }

    return (
        <div className={classNames('filters')}>
            <div className={classNames('filters__params')}>
                <Select
                    value={sort.options}
                    defaultValue={'Sort by'}
                    options={filters}
                    onChange={selectOption => selectHandle({...sort, option: selectOption}) }/>
            </div>
            <div className={classNames('filters__rating')}>
                <input
                    value={sort.input}
                    placeholder={'Rating over...'}
                    onChange={evt => selectHandle({...sort, input: evt.target.value})}/>
            </div>
        </div>
    );
};

export default Filters;