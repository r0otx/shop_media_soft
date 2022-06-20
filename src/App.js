import React, {useEffect} from "react";
import "./App.scss";
import classNames from 'classnames';
import {useDispatch} from "react-redux";
import {getData} from "./redux/actions/products";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";


const App = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch])

    return (
        <div className={classNames('wrapper')}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
