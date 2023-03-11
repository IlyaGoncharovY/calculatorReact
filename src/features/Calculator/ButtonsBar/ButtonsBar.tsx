import React, {Dispatch, FC, RefObject, SetStateAction} from 'react';
import {Buttons} from "../../../common/Data/DataSet";
import {useAppDispatch} from "../../../app/hooks";
import {appendNumber, toggleDecimal} from "../../../BLL/calculatorSlice";

interface ButtonsBarType {
    setInputValue: Dispatch<SetStateAction<string>>
    inputRef: RefObject<HTMLInputElement>
}

const ButtonsBar: FC<ButtonsBarType> = ({setInputValue, inputRef}) => {

    const dispatch = useAppDispatch()

    // const tapeNumber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     let currentValue = event.currentTarget.value
    //     setInputValue(currentValue)
    //     let refOut = inputRef.current
    //     if (refOut?.value === "0") {
    //         refOut.value = ""
    //     }
    //     if (refOut) {
    //         refOut.value += currentValue;
    //     }
    // }

    const tapeNumber = (number: string) => {
        number === "." ? dispatch(toggleDecimal())
            : dispatch(appendNumber(number))
    }

    return (
        <div>
            {Buttons.map((el, index) =>
                    <button
                        value={el.value}
                        key={index}
                        onClick={() => tapeNumber(el.value)}
                    >{el.value}</button>
                //         <ButtonsItem
                //     key={index}
                //     value={el.value}
                //     onChangeHandler={onChangeHandler}
                // />
            )}
        </div>
    );
};

export default ButtonsBar;