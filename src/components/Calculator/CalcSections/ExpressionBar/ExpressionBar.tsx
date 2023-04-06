import React from 'react';
import {Expression} from "../../../../common/Data/DataSet";
import {useAppDispatch} from "../../../../app/hooks";
import {clearCalculator, inputOperator} from "../../../../bll/calculatorSlice";
import {ExpressionButton, ExpressionContainer, ExpressionWrapper} from "../../../../styled/styled";


export const ExpressionBar = () => {

    const dispatch = useAppDispatch();

    const tapeExpression = (operator: string) => {
        operator === "CE" ? dispatch(clearCalculator())
            : dispatch(inputOperator({operator}))
    }

    return (
        <ExpressionWrapper>
            <ExpressionContainer>
                {Expression.map((el, index) =>
                    <ExpressionButton
                        key={index}
                        onClick={() => tapeExpression(el.value)}
                    >
                        {el.value}
                    </ExpressionButton>
                )}
            </ExpressionContainer>
        </ExpressionWrapper>

    );
};



