import React from 'react';
import {Expression} from "../../../common/Data/DataSet";
import {useAppDispatch} from "../../../app/hooks";
import {clearCalculator, inputOperator} from "../../../BLL/calculatorSlice";


const ExpressionBar = () => {

    const dispatch = useAppDispatch();

    const tapeExpression = (operator: string) => {
        operator === "CE" ? dispatch(clearCalculator())
            : dispatch(inputOperator({operator}))
    }

    return (
        <div>
            {Expression.map((el, index) =>
                <button
                    key={index}
                    onClick={() => tapeExpression(el.value)}
                >
                    {el.value}
                </button>
            )}
        </div>
    );
};

export default ExpressionBar;

