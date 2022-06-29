import React, { useState } from 'react';
import classNames from "classnames";

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
    const month = i + 1;
    return month <= 9 ? '0' + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function CForm({
                                  cardMonth,
                                  cardYear,
                                  onUpdateState,
                                  cardNumberRef,
                                  cardHolderRef,
                                  cardDateRef,
                                  onCardInputFocus,
                                  onCardInputBlur,
                                  cardCvv,
                                  children
                              }) {
    const [cardNumber, setCardNumber] = useState('');

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        onUpdateState(name, value);
    };
    
    const onCardNumberChange = (event) => {
        let { value, name } = event.target;
        let cardNumber = value;
        value = value.replace(/\D/g, '');
        if (/^3[47]\d{0,13}$/.test(value)) {
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
            // diner's club, 14 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{6})/, '$1 $2 ');
        } else if (/^\d{0,16}$/.test(value)) {
            // regular cc number, 16 digits
            cardNumber = value
                .replace(/(\d{4})/, '$1 ')
                .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
                .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
        }

        setCardNumber(cardNumber.trimRight());
        onUpdateState(name, cardNumber);
    };

    const onCvvFocus = () => {
        onUpdateState('isCardFlipped', true);
    };

    const onCvvBlur = () => {
        onUpdateState('isCardFlipped', false);
    };

    // NOTE: Currently the cursor on the card number field gets reset if we remove a number, the code bellow was used
    // in class components, need to transform this to work with functional components.
    // getSnapshotBeforeUpdate() {
    //     return this.props.cardNumberRef.current.selectionStart;
    // }

    // const componentDidUpdate = function (prevProps, prevState, cursorIdx) {
    //     const node = cardNumberRef.current;
    //     const { cardNumber: cardNum } = state;
    //     const { cardNumber: prevCardNum } = prevState;
    //     if (
    //         cardNum.length > prevCardNum.length &&
    //         cardNum[cursorIdx - 1] === ' '
    //     ) {
    //         cursorIdx += 1;
    //     } else if (prevCardNum[cursorIdx - 1] === ' ') {
    //         cursorIdx -= 1;
    //     }
    //     node.selectionStart = node.selectionEnd = cursorIdx;
    // };

    return (
        <div className={classNames('card-form')}>
            <div className={classNames('card-list')}>{children}</div>
            <div className={classNames('card-form__inner')}>
                <div className={classNames('card-input')}>
                    <label htmlFor="cardNumber" className={classNames('card-input__label')}>
                        Card Number
                    </label>
                    <input
                        type="tel"
                        name="cardNumber"
                        className={classNames('card-input__input')}
                        autoComplete="off"
                        onChange={onCardNumberChange}
                        maxLength="19"
                        ref={cardNumberRef}
                        onFocus={(e) => onCardInputFocus(e, 'cardNumber')}
                        onBlur={onCardInputBlur}
                        value={cardNumber}
                    />
                </div>

                <div className="card-input">
                    <label htmlFor="cardName" className={classNames('card-input__label')}>
                        Card Holder
                    </label>
                    <input
                        type="text"
                        className={classNames('card-input__input')}
                        autoComplete="off"
                        name="cardHolder"
                        onChange={handleFormChange}
                        ref={cardHolderRef}
                        onFocus={(e) => onCardInputFocus(e, 'cardHolder')}
                        onBlur={onCardInputBlur}
                    />
                </div>

                <div className={classNames('card-form__row')}>
                    <div className={classNames('card-form__col')}>
                        <div className={classNames('card-form__group')}>
                            <label
                                htmlFor="cardMonth"
                                className={classNames('card-input__label')}
                            >
                                Expiration Date
                            </label>
                            <select
                                className={classNames('card-input__input', '-select')}
                                value={cardMonth}
                                name="cardMonth"
                                onChange={handleFormChange}
                                ref={cardDateRef}
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            >
                                <option value="" disabled>
                                    Month
                                </option>

                                {monthsArr.map((val, index) => (
                                    <option key={index} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                            <select
                                name="cardYear"
                                className={classNames('card-input__input', '-select')}
                                value={cardYear}
                                onChange={handleFormChange}
                                onFocus={(e) => onCardInputFocus(e, 'cardDate')}
                                onBlur={onCardInputBlur}
                            >
                                <option value="" disabled>
                                    Year
                                </option>

                                {yearsArr.map((val, index) => (
                                    <option key={index} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={classNames('card-form__col', '-cvv')}>
                        <div className={classNames('card-input')}>
                            <label
                                htmlFor="cardCvv"
                                className={classNames('card-input__label')}
                            >
                                CVV
                            </label>
                            <input
                                type="tel"
                                className={classNames('card-input__input')}
                                maxLength="4"
                                autoComplete="off"
                                name="cardCvv"
                                onChange={handleFormChange}
                                onFocus={onCvvFocus}
                                onBlur={onCvvBlur}
                                ref={cardCvv}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}