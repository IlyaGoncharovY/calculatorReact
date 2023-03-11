import React, {useRef, useState} from 'react';
import Display from "./Display/Display";
import ExpressionBar from "./ExpressionBar/ExpressionBar";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import EqualBar from "./EqualBar/EqualBar";
import {useAppSelector} from "../../app/hooks";

const Calculator = () => {

    const results = useAppSelector(state => state.calculatorReducer.results)

    const [inputValue, setInputValue] = useState(results);

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <Display inputValue={inputValue} inputRef={inputRef}/>
            <ExpressionBar inputValue={inputValue} inputRef={inputRef}/>
            <ButtonsBar setInputValue={setInputValue} inputRef={inputRef}/>
            <EqualBar/>
        </div>
    );
};

export default Calculator;