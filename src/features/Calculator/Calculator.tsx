import React from 'react';
import Display from "./Display/Display";
import ExpressionBar from "./ExpressionBar/ExpressionBar";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import EqualBar from "./EqualBar/EqualBar";
import {
    ButtonsWrapper,
    CommonWrapper,
    EqualWrapper,
    ExpressionWrapper,
    InputWrapper,
} from "../../styled/styled";

const Calculator = () => {

    return (
        <CommonWrapper>
            <InputWrapper>
                <Display/>
            </InputWrapper>

            <ExpressionWrapper>
                <ExpressionBar/>
            </ExpressionWrapper>

            <ButtonsWrapper>
                <ButtonsBar/>
            </ButtonsWrapper>

            <EqualWrapper>
                <EqualBar/>
            </EqualWrapper>

        </CommonWrapper>
    );
};

export default Calculator;