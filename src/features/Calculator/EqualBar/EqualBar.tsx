import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {calculateResult} from "../../../bll/calculatorSlice";
import {EqualButton} from "../../../styled/styled";

const EqualBar = () => {

    const dispatch = useAppDispatch()

    const tapeEqual = () => {
        dispatch(calculateResult())
    }

    return (
        <div>
            <EqualButton onClick={tapeEqual}>
                =
            </EqualButton>
        </div>
    );
};

export default EqualBar;