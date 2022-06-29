import React from "react";
import Breadcrumbs from "../../../../utils/Breadcrumbs/Breadcrumbs";
import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
import Input from "../../../../common/Input/Input";
import Textarea from "../../../../common/TextArea/Textarea";
import "./User.scss";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../../../redux/actions/user";

const User = ({breadcrumbLinks}) => {

    const history = useNavigate();
    const handleNext = () => {
        history('/order/payment');
    }

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const handleInput = (e) => {
        dispatch(setUser(e))
    }

    return (
        <div>
            <Breadcrumbs pages={breadcrumbLinks}/>
            <div className={classNames('user')}>
                <div className={classNames('user__form')}>
                    <div className={classNames('form')}>
                        <div className={classNames('form__row')}>
                        <div className={classNames('form__firstname')}>
                            <label>First Name:</label>
                            <Input onChange={(e) => handleInput({firstname: e.target.value})} value={user.firstname} placeholder={'Eric'}/>
                        </div>
                        <div className={classNames('form__lastname')}>
                            <label>Last Name:</label>
                            <Input onChange={(e) => handleInput({lastname: e.target.value})} value={user.lastname} placeholder={'Cartman'}/>
                        </div>
                        </div>
                        <div className={classNames('form__row')}>
                            <div className={classNames('form__email')}>
                                <label>Email:</label>
                                <Input onChange={(e) => handleInput({email: e.target.value})} value={user.email} placeholder={'123@321.com'}/>
                            </div>
                            <div className={classNames('form__phone')}>
                                <label>Phone:</label>
                                <Input onChange={(e) => handleInput({phone: e.target.value})} value={user.phone} placeholder={'+1 888 8888 88 88'}/>
                            </div>
                        </div>
                        <div className={classNames('form__row')}>
                            <div className={classNames('form__comment')}>
                                <label>Comment:</label>
                                <Textarea onChange={(e) => handleInput({comment: e.target.value})} value={user.comment} placeholder={'123@321.com'} />
                            </div>
                        </div>
                        <Button className={classNames('form__button')} onClick={handleNext}>Next >>></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;