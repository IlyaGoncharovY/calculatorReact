import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Input} from "../../../styled/styled";

const Display = () => {

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)

    return (
        <div>
            <Input>{displayValue === "Infinity" ? "Не определено" : displayValue}</Input>
        </div>
    );
};

export default Display;