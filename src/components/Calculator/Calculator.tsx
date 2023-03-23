import React, {useState} from 'react';
import Display from "../Display/Display";
import ExpressionBar from "../ExpressionBar/ExpressionBar";
import ButtonsBar from "../ButtonsBar/ButtonsBar";
import EqualBar from "../EqualBar/EqualBar";
import {CommonWrapper,} from "../../styled/styled";
import ChangeMode from "../ChageMode/ChangeMode";
import Canvas from "../Canvas/Canvas";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import BasicCalculatorSections from "../../common/UniversalComponents/BasicCalculatorSections";
import BasicCanvasContainer from "../../common/UniversalComponents/BasicCanvasContainer";
import {CalculatorTypes} from "../../common/Types/CalculatorTypes";

const Calculator = () => {

    const [isCanvas, setIsCanvas] = useState<boolean>(true)

    const item = <BasicCalculatorSections setIsCanvas={setIsCanvas}><Display/></BasicCalculatorSections>

    return (
        <CommonWrapper>

            <ChangeMode/>

            <DndProvider backend={HTML5Backend}>

                <BasicCanvasContainer title={CalculatorTypes.CANVAS}>
                    {/*<Canvas/>*/}
                    {/*{!isCanvas && <Display/>}*/}
                    {/*{!!isCanvas ? <Canvas/> : <Display/>}*/}
                    {isCanvas ? item : <Canvas/>}
                </BasicCanvasContainer>

                <BasicCanvasContainer title={CalculatorTypes.CALCULATOR}>
                    {!isCanvas ? item : null}
                </BasicCanvasContainer>

                {/*<BasicCalculatorSections setIsCanvas={setIsCanvas}>*/}
                {/*    <ExpressionBar/>*/}
                {/*</BasicCalculatorSections>*/}

                {/*<BasicCalculatorSections setIsCanvas={setIsCanvas}>*/}
                {/*    <ButtonsBar/>*/}
                {/*</BasicCalculatorSections>*/}

                {/*<BasicCalculatorSections setIsCanvas={setIsCanvas}>*/}
                {/*    <EqualBar/>*/}
                {/*</BasicCalculatorSections>*/}

            </DndProvider>

        </CommonWrapper>
    );
};

export default Calculator;