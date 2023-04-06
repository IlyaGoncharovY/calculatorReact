import React from 'react';
import {useAppDispatch} from "../../../../app/hooks";
import {calculateResult} from "../../../../bll/calculatorSlice";
import {EqualButton, EqualWrapper} from "../../../../styled/styled";

export const EqualBar = () => {

    const dispatch = useAppDispatch()

    const tapeEqual = () => {
        dispatch(calculateResult())
    }

    return (
        <EqualWrapper>
            <EqualButton onClick={tapeEqual}>
                =
            </EqualButton>
        </EqualWrapper>
    );
};

