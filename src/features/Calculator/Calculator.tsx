import React from 'react';
import Display from "./Display/Display";
import ExpressionBar from "./ExpressionBar/ExpressionBar";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import EqualBar from "./EqualBar/EqualBar";
import {ButtonsWrapper, EqualWrapper, ExpressionWrapper, InputWrapper, Wrapper} from "../../styled/styled";

const Calculator = () => {

    return (
        <Wrapper>
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

        </Wrapper>
    );
};

export default Calculator;