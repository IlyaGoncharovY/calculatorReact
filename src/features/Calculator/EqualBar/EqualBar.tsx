import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {calculateResult} from "../../../BLL/calculatorSlice";

const EqualBar = () => {

    const dispatch = useAppDispatch()

    const tapeEqual = () => {
        dispatch(calculateResult())
    }

    return (
        <div>
            <button onClick={tapeEqual}>
                =
            </button>
        </div>
    );
};

export default EqualBar;