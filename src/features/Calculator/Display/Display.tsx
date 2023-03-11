import React, {FC, RefObject} from 'react';
import {useAppSelector} from "../../../app/hooks";


interface DisplayType {
    inputValue: string
    inputRef: RefObject<HTMLInputElement>
}

const Display: FC<DisplayType> = ({inputValue, inputRef}) => {

    const results = useAppSelector(state => state.calculatorReducer.results)

    return (
        <div>
            <input type={"text"}
                   // ref={inputRef}
                   // defaultValue={inputValue}

                   value={results}
            />
        </div>
    );
};

export default Display;