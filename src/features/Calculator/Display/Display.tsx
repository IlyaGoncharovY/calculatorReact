import React from 'react';
import {useAppSelector} from "../../../app/hooks";

const Display = () => {

    const displayValue = useAppSelector(state => state.calculatorReducer.displayValue)

    return (
        <div>
            {/*<input type={"text"}*/}
            {/*       value={displayValue === "Infinity"? "Не определено" : displayValue}*/}
            {/*/>*/}
            {displayValue === "Infinity" ? "Не определено" : displayValue}
        </div>
    );
};

export default Display;