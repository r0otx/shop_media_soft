import React from "react";
import "./Filters.scss"
import classNames from "classnames";
import Select from "../../../../common/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {setFindInput, setSort} from "../../../../redux/actions/products";
import Input from "../../../../common/Input/Input";

const Filters = () => {

    const sort = useSelector(state => state.products);
    const dispatch = useDispatch();
    const filters = [
        {value: "title", name: "Name"},
        {value: "price", name: "Price"}
    ]
    const selectHandle = (evt) => {
        dispatch(setSort(evt))
    }
    const inputHandle = (evt) => {
        dispatch(setFindInput(evt))
    }

    return (
        <div className={classNames('filters')}>
            <div className={classNames('filters__params')}>
                <Select
                    value={sort.sortOption}
                    defaultValue={'Sort by'}
                    options={filters}
                    onChange={selectOption => selectHandle(selectOption) }/>
            </div>
            <div className={classNames('filters__rating')}>
                <Input value={sort.input}
                       placeholder={'Find...'}
                       onChange={evt => inputHandle(evt.target.value)} />
            </div>
        </div>
    );
};

export default Filters;