import React from 'react';
import {Buttons} from "../../../common/Data/DataSet";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {inputDecimal, inputDigit} from "../../../BLL/calculatorSlice";

const ButtonsBar = () => {

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)
    const dispatch = useAppDispatch()

    const tapeNumber = (number: string) => {
        number === "." ? dispatch(inputDecimal())
            : dispatch(inputDigit(number))
        console.log(`click inputDigit() ===  ${displayValue}`)
    }

    return (
        <div>
            {Buttons.map((el, index) =>
                <button
                    value={el.value}
                    key={index}
                    onClick={() => tapeNumber(el.value)}
                >{el.value}</button>
            )}
        </div>
    );
};

export default ButtonsBar;