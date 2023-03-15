import React from 'react';
import Display from "./Display/Display";
import ExpressionBar from "./ExpressionBar/ExpressionBar";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import EqualBar from "./EqualBar/EqualBar";

const Calculator = () => {

    return (
        <div>
            <Display/>
            <ExpressionBar/>
            <ButtonsBar/>
            <EqualBar/>
        </div>
    );
};

export default Calculator;