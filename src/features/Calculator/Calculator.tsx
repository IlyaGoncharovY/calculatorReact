import React from 'react';
import Display from "./Display/Display";
import ExpressionBar from "./ExpressionBar/ExpressionBar";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import EqualBar from "./EqualBar/EqualBar";
import {
    ButtonsWrapper, CanvasWrapper, ChangeModeWrapper,
    CommonWrapper,
    EqualWrapper,
    ExpressionWrapper,
    InputWrapper,
} from "../../styled/styled";
import ChangeMode from "./ChageMode/ChangeMode";
import Canvas from "./Canvas/Canvas";

const Calculator = () => {

    return (
        <CommonWrapper>

            <ChangeModeWrapper>
                <ChangeMode/>
            </ChangeModeWrapper>

            <CanvasWrapper>
                <Canvas/>
            </CanvasWrapper>

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