import React from 'react';
import {Buttons} from "../../../common/Data/DataSet";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {inputDecimal, inputDigit} from "../../../bll/calculatorSlice";
import {Button, ButtonsContainer} from "../../../styled/styled";

const ButtonsBar = () => {

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)
    const dispatch = useAppDispatch()

    const tapeNumber = (number: string) => {
        number === "." ? dispatch(inputDecimal())
            : dispatch(inputDigit(number))
        console.log(`click inputDigit() ===  ${displayValue}`)
    }

    return (
        <ButtonsContainer>
            {Buttons.map((el, index) =>
                <Button
                    value={el.value}
                    key={index}
                    onClick={() => tapeNumber(el.value)}
                    theme={el.value === "0" ? {width: "150px"}: {width: "73px"}}
                >{el.value}</Button>
            )}
        </ButtonsContainer>
    );
};

export default ButtonsBar;