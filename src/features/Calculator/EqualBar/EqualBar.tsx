import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {calculateRes} from "../../../BLL/calculatorSlice";

const EqualBar = () => {

    const dispatch = useAppDispatch()

    const tapeEqual = () => {
        dispatch(calculateRes())
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