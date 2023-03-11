import React, {FC} from 'react';
import {useAppDispatch} from "../../../../app/hooks";

interface ExpressionItemType {
    value: string
    handleClick: void
}

const ExpressionItem: FC<ExpressionItemType> = ({value, }) => {

    const dispatch = useAppDispatch()

    const onClickHandler = () => {

        console.log(value)

    }

    return (
        <div>
            <button onClick={onClickHandler}>
                {value}
            </button>
        </div>
    );
};

export default ExpressionItem;