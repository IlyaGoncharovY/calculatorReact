import React, {FC, RefObject} from 'react';
import {Expression} from "../../../common/Data/DataSet";
import {useAppDispatch} from "../../../app/hooks";
import {setOperator} from "../../../BLL/calculatorSlice";

interface ExpressionBarType {
    inputValue: string
    inputRef: RefObject<HTMLInputElement>
}

const ExpressionBar: FC<ExpressionBarType> = ({inputValue, inputRef}) => {

    const dispatch = useAppDispatch();

    const tapeExpression = (operator: string) => {
        dispatch(setOperator(operator))
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