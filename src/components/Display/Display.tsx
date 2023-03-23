import React, {Dispatch, FC, SetStateAction} from 'react';
import {useAppSelector} from "../../app/hooks";
import {Input, InputWrapper} from "../../styled/styled";
import {useDrag} from "react-dnd";
import {CalculatorTypes} from "../../common/Types/CalculatorTypes";



const Display = () => {
    //
    // const [, drag] = useDrag(() => ({
    //     type: CalculatorTypes.DISPLAY,
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // }))

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)

    return (
        <InputWrapper>
            <Input>{displayValue === "Infinity" ? "Не определено" : displayValue}</Input>
        </InputWrapper>
    );
};

export default Display;