import React from 'react';
import {useAppSelector} from "../../../../app/hooks";
import {Input, InputWrapper} from "../../../../styled/styled";


export const Display = () => {

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)

    return (
        <InputWrapper>
            <Input>{displayValue === "Infinity" ? "Не определено" : displayValue}</Input>
        </InputWrapper>
    );
};

